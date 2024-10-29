import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProductSection = ({ title, products }) => {
  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 17 }}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: '#999999' }}>Xem thêm</Text>
          <Ionicons name='arrow-forward' size={18} color='#ccc' />
        </View>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={products}
          renderItem={({ item }) => (
            <View style={{ padding: 5 }}>
              <Card data={item} />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default ProductSection

const styles = StyleSheet.create({})