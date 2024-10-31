import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image } from 'react-native';
import Swiper from 'react-native-swiper';

const SwipperCategories = ({data}) => {

  const categoriesGroups = [
    data.slice(0, 6), 
    data.slice(6, 12) 
  ];

  return (
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
            <TouchableOpacity style={styles.categoryItem}>
             <Image source={{uri: item.img}} style={{width: 100, height: 70}} />
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
             <Image source={{uri: item.img}} style={{width: 100, height: 70}} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={3} 
          scrollEnabled={false} 
        />
      </View>
    </Swiper>
  );
};

export default SwipperCategories;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    height: 200,
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
