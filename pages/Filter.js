import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, ActivityIndicator, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from '@rneui/themed';
import { MAINCOLOR } from '../constants/color';
import BASE_URL from '../api';

const Filter = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const filterHeight = useState(new Animated.Value(0))[0];

  useEffect(() => {
    fetchFilters();
  }, []);

  const fetchFilters = async () => {
    try {
      const response = await BASE_URL.get('/dt-store/products');
      const data = response.data.result;
      setProducts(data);
      const categorySet = new Set();
      const colorSet = new Set();
      const sizeSet = new Set();

      data.forEach(product => {
        if (product.category && product.category.name) {
          categorySet.add(product.category.name);
        }
        product.images.forEach(image => {
          if (image.color) {
            colorSet.add(image.color);
          }
          image.sizes.forEach(size => {
            if (size.name) {
              sizeSet.add(size.name);
            }
          });
        });
      });

      setCategories(Array.from(categorySet));
      setColors(Array.from(colorSet));
      setSizes(Array.from(sizeSet));
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  };

  const fetchFilteredProducts = async () => {
    setLoading(true);
    try {
      let categoryQuery = selectedCategories.map(cat => `category=${cat}`).join('&');
      let colorQuery = selectedColors.map(color => `color=${color}`).join('&');
      let sizeQuery = selectedSizes.map(size => `size=${size}`).join('&');

      const queryString = [categoryQuery, colorQuery, sizeQuery].filter(query => query).join('&');
      const response = await BASE_URL.get(`/dt-store/products/filter?${queryString}`);
      const data = response.data.result;
      setProducts(data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý thay đổi cho Danh mục
  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter(item => item !== category)
        : [...prevSelected, category]
    );
  };

  // Hàm xử lý thay đổi cho Màu sắc
  const toggleColor = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter(item => item !== color)
        : [...prevSelected, color]
    );
  };

  // Hàm xử lý thay đổi cho Kích thước
  const toggleSize = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter(item => item !== size)
        : [...prevSelected, size]
    );
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
    Animated.timing(filterHeight, {
      toValue: filterVisible ? 0 : 500,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="arrow-back" size={24} color="#fff" onPress={() => navigation.goBack()} />
          <Text style={styles.headerText}>Lọc sản phẩm</Text>
          <Ionicons name="filter" size={24} color="#fff" onPress={toggleFilter} />
        </View>
      </View>


      <Animated.View style={[styles.filterContainer, { height: filterHeight }]}>
        <Text style={styles.label}>Danh mục:</Text>
        <View style={styles.filterRow}>
          {categories.map((category) => (
            <View key={category} style={styles.checkboxWrapper}>
              <CheckBox
                checked={selectedCategories.includes(category)} 
                onPress={() => toggleCategory(category)} 
              />
              <Text style={styles.checkboxLabel}>{category}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.label}>Màu sắc:</Text>
        <View style={styles.filterRow}>
          {colors.map((color) => (
            <View key={color} style={styles.checkboxWrapper}>
              <CheckBox
                checked={selectedColors.includes(color)}
                onPress={() => toggleColor(color)} 
              />
              <Text style={styles.checkboxLabel}>{color}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.label}>Kích thước:</Text>
        <View style={styles.filterRow}>
          {sizes.map((size) => (
            <View key={size} style={styles.checkboxWrapper}>
              <CheckBox
                checked={selectedSizes.includes(size)} 
                onPress={() => toggleSize(size)} 
              />
              <Text style={styles.checkboxLabel}>{size}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.filterButton} onPress={fetchFilteredProducts}>
          <Text style={styles.filterButtonText}>Lọc</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.productList}>
        {loading ? (
          <ActivityIndicator size="large" color={MAINCOLOR} />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price} VND</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.noResultText}>Không tìm thấy sản phẩm</Text>}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: MAINCOLOR,
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    padding: 10,
    backgroundColor: MAINCOLOR,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  filterContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    overflow: 'hidden',
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  checkboxWrapper: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  filterButton: {
    backgroundColor: MAINCOLOR,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'green',
  },
  noResultText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});

export default Filter;
