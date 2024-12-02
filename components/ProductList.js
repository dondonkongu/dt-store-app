import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardMedium from './CardMedium';
import BASE_URL from '../api';

const ProductList = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const fetchProducts = async (currentPage = 1) => {
    try {
      setLoading(true);
      const response = await BASE_URL.get(`/dt-store/products/sort/totalSold?page=${currentPage}&size=6`);
      const newProducts = response.data.result?.data || [];
      if (newProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      } else {
        setIsEnd(true); // Không còn dữ liệu để tải
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const loadMore = () => {
    if (!loading && !isEnd) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchProducts(nextPage);
    }
  };

  const renderRow = ({ item, index }) => {
    if (index % 2 === 0) {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <CardMedium data={item} />
          {products[index + 1] && <CardMedium data={products[index + 1]} />}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 17 }}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#999999' }}>Xem thêm</Text>
          <Ionicons name="arrow-forward" size={18} color="#ccc" />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderRow}
        keyExtractor={(item, index) => `product-${index}`}
        onEndReached={loadMore} // Gọi khi chạm tới cuối danh sách
        onEndReachedThreshold={0.9} // Kích hoạt khi gần tới cuối danh sách (50%)
        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="small" color="#0000ff" style={{ marginVertical: 10 }} />
          ) : isEnd ? (
            <Text style={{ textAlign: 'center', color: '#999', marginVertical: 10 }}>
              Không còn sản phẩm để tải.
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
