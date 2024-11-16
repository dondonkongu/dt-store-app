import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { MAINCOLOR } from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Gọi API tìm kiếm
  const searchProducts = async (name) => {
    if (!name) {
      setData([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/dt-store/products/search?name=${name}`);
      setData(response.data); // Giả sử API trả về một mảng sản phẩm
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
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
              onChangeText={(text) => {
                setSearchText(text);
                searchProducts(text); 
              }}
            />
          </View>
        </View>
      </View>

     
      {loading ? (
        <ActivityIndicator size="large" color={MAINCOLOR} style={styles.loader} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text style={styles.resultText}>{item.name}</Text>
            </View>
          )}
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultText: {
    fontSize: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    color: '#aaa',
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
});
