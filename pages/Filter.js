import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { CheckBox } from '@rneui/themed';
import BASE_URL from '../api';
import qs from 'qs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../constants/color';

const Filter = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        categoryId: [],
        subcategoryId: [],
        color: [],
        size: []
    });

    useEffect(() => {
        fetchCategories();
        fetchSubcategories();
        fetchVariants();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await BASE_URL.get('/dt-store/categories');
            setCategories(response.data.result);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchSubcategories = async () => {
        try {
            const response = await BASE_URL.get('/dt-store/subcategories');
            setSubcategories(response.data.result);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };

    const fetchVariants = async () => {
        try {
            const response = await BASE_URL.get('/dt-store/variants');
            const data = response.data.result;
            setColors([...new Set(data.map(v => v.color))]);
            setSizes([...new Set(data.map(v => v.size))]);
        } catch (error) {
            console.error('Error fetching variants:', error);
        }
    };

    const handleFilterSubmit = async () => {
      try {
          const params = {
              categoryId:  selectedFilters.categoryId ,
              subcategoryId: selectedFilters.subcategoryId ,
              color:  selectedFilters.color ,
              size:  selectedFilters.size ,
          };          
  
          const response = await BASE_URL.get('/dt-store/products/filter', {
              params: params,
              paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }) 
          });
          navigation.navigate('ProductFilter', { products: response.data.result });
  
      } catch (error) {
          console.error('Error applying filters:', error.response ? error.response.data : error.message);
      }
  };

    const toggleSelection = (key, value) => {
        const current = selectedFilters[key];
        const updated = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];
        setSelectedFilters({ ...selectedFilters, [key]: updated });
    };

    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Bộ lọc</Text>
        <View style={{ width: 26 }} />
      </View>
            <FlatList
                style={{ padding: 10 }}
                data={categories}
                ListHeaderComponent={
                    <>
                        <Text style={styles.sectionTitle}>Categories</Text>
                    </>
                }
                renderItem={({ item }) => (
                    <CheckBox
                        title={item.name}
                        checked={selectedFilters.categoryId.includes(item.id)}
                        onPress={() => toggleSelection('categoryId', item.id)}
                        containerStyle={styles.checkboxContainer}
                        textStyle={styles.checkboxText}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={
                    <>
                        <Text style={styles.sectionTitle}>Subcategories</Text>
                        <FlatList
                            data={subcategories}
                            renderItem={({ item }) => (
                                <CheckBox
                                    title={item.name}
                                    checked={selectedFilters.subcategoryId.includes(item.id)}
                                    onPress={() => toggleSelection('subcategoryId', item.id)}
                                    containerStyle={styles.checkboxContainer}
                                    textStyle={styles.checkboxText}
                                />
                            )}
                            keyExtractor={(item) => item.id.toString()}
                        />

                        <Text style={styles.sectionTitle}>Colors</Text>
                        <FlatList
                            data={colors}
                            renderItem={({ item }) => (
                                <CheckBox
                                    title={item}
                                    checked={selectedFilters.color.includes(item)}
                                    onPress={() => toggleSelection('color', item)}
                                    containerStyle={styles.checkboxContainer}
                                    textStyle={styles.checkboxText}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />

                        <Text style={styles.sectionTitle}>Sizes</Text>
                        <FlatList
                            data={sizes}
                            renderItem={({ item }) => (
                                <CheckBox
                                    title={item}
                                    checked={selectedFilters.size.includes(item)}
                                    onPress={() => toggleSelection('size', item)}
                                    containerStyle={styles.checkboxContainer}
                                    textStyle={styles.checkboxText}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </>
                }
            />
            <TouchableOpacity style={styles.applyButton} onPress={handleFilterSubmit}>
                <Text style={styles.applyButtonText}>Apply Filters</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,backgroundColor: '#f5f5f5',
      },
      header: {backgroundColor: MAINCOLOR,width: '100%', paddingHorizontal: 10,height: 70,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'flex-end',paddingBottom: 5,},
      headerText: {color: 'white',fontSize: 20,fontWeight: 'bold',},
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#333' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#555' },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 10,
    },
    checkboxText: {
        fontSize: 16,
        color: '#333',
    },
    applyButton: { backgroundColor: '#CC3333', padding: 16, borderRadius: 8, margin: 20 },
    applyButtonText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default Filter;
