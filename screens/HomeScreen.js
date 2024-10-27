import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../constants/color';
import { useState } from 'react';

const HomeScreen = () => {
  const categories = [
    { id: 1, name: 'DT' },
    { id: 2, name: 'Nam' },
    { id: 3, name: 'Nữ' },
    { id: 4, name: 'Đồ đôi' },
    { id: 5, name: 'Bộ sưu tập' },
    { id: 6, name: 'Mũ bảo hiểm' },
    { id: 7, name: 'Mũ bảo hiểm' },
    { id: 8, name: 'Mũ bảo hiểm' },
    { id: 9, name: 'Mũ bảo hiểm' },
    { id: 10, name: 'Mũ bảo hiểm' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSetCategory=(item)=>{
    setSelectedCategory(item);
    console.log(item);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.inputSearch}>
            <Ionicons name='search' size={24} color='#000' />
            <TextInput style={styles.searchText}
              placeholder='Tìm kiếm' />
          </View>
          <View style={styles.icon}>
            <Ionicons name='notifications-outline' size={26} color='#fff' />
            <Ionicons name='cart-outline' size={26} color='#fff' />
            </View>
        </View>
      </View>
      <View style={styles.category}>
        <FlatList
        showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => ( 
            <TouchableOpacity style={{ padding:10, }} onPress={()=>handleSetCategory(item)}>
            <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item.id}
          horizontal={true}
        />
      </View>
      <Text>{selectedCategory.name}</Text>
    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: MAINCOLOR,

  },
  headerContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:30,
    padding: 10,
  },
  inputSearch:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon:{
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    justifyContent: 'space-between',
  },
  category:{
    backgroundColor: '#ccc',
  }
})