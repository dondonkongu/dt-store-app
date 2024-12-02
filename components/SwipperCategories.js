import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import BASE_URL from '../api';
import { useNavigation } from '@react-navigation/native';

const SwipperCategories = ({ data }) => { 

  const navigation = useNavigation();
  const length = data.length;


  const categoriesGroups = [
    data.slice(0, 6), 
    data.slice(6, 12) 
  ];

  const handleSelectCategory = async (id) => {
    console.log(id);
    try {
      const fetchProducts = await BASE_URL.get(`/dt-store/products/category/${id}`);
      console.log(fetchProducts.data.result);
      
      navigation.navigate('ProductFilter', { products: fetchProducts.data.result });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      {length > 6 ? (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={false}
          dotColor="#ccc"
          activeDotColor="#ff6347"
          loop={true}
        >
          <View style={styles.slide}>
            <FlatList
              data={categoriesGroups[0]} 
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryItem} onPress={()=>handleSelectCategory(item.id)}>
                  <Image source={{ uri: item.img }} style={{ width: 100, height: 70 }} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              numColumns={3} 
              scrollEnabled={false}
            />
          </View>

          <View style={styles.slide}>
            <FlatList
              data={categoriesGroups[1]} 
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryItem}>
                  <Image source={{ uri: item.img }} style={{ width: 100, height: 70 }} />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              numColumns={3} 
              scrollEnabled={false} 
            />
          </View>
        </Swiper>
      ) : (
        <View style={{ justifyContent:'center',alignItems:'center' }}>
        <FlatList
          data={data} 
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}  onPress={()=>handleSelectCategory(item.id)}>
              <Image source={{ uri: item.img }} style={{ width: 100, height: 70 }} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={3} 
          scrollEnabled={false}
        />
        </View>
      )}
    </>
  );
};

export default SwipperCategories;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 220,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    elevation: 3,  
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
