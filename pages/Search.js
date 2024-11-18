import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useRef, useCallback } from 'react';
import { MAINCOLOR } from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_URL from '../api';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounceTimeout = useRef(null); // Tạo biến tham chiếu để lưu timeout

  // Gọi API tìm kiếm
  const searchProducts = async (name) => {
    if (!name) {
      setData([]);
      return;
    }

    setLoading(true);
    try {
      const response = await BASE_URL.get(`/dt-store/products/search?name=${name}`);
      setData(response.data.result);
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // Hàm debounce
  const handleInputChange = (text) => {
    setSearchText(text);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current); // Hủy bỏ timeout trước đó nếu tồn tại
    }
    debounceTimeout.current = setTimeout(() => {
      searchProducts(text); // Gọi API sau khi người dùng ngừng nhập liệu 500ms
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
            onPress={() => navigation.goBack()}
          />
          <View style={styles.inputSearch}>
            <Ionicons name="search" size={24} color="#000" />
            <TextInput
              style={styles.searchText}
              placeholder="Tìm kiếm"
              value={searchText}
              onChangeText={handleInputChange} 
            />
          </View>
          <Ionicons name="filter" size={24} color="#fff" onPress={() => navigation.navigate('Filter')} />
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={MAINCOLOR} style={styles.loader} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const mainImage = item.images.find((image) => image.isMain)?.url || '';
            return (
              <View style={styles.resultItem}>
                <Image
                  source={{ uri: mainImage }}
                  style={styles.productImage}
                  resizeMode="cover"
                />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    {item.price.toLocaleString('vi-VN')} VND
                  </Text>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Không tìm thấy kết quả</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: MAINCOLOR,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    gap:10,
  },
  inputSearch: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchText: {
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    color: '#aaa',
    fontSize: 16,
  },
});
