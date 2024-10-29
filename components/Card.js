import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const Card = ({data}) => {
  return (
    <TouchableOpacity style={{ width: 140, height: 250 }}>
        <View >
            <Image source={{ uri:data.url }}
            style={{ width: 140, height: 200 }} resizeMode='contain'
            />  
        </View>
        <Text style={styles.textPrice}>{data.price.toLocaleString('vi-VN')} VND</Text>
        <Text style={styles.textName} numberOfLines={1}>{data.name}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    textPrice: {
        fontSize: 17,
        color: 'red',
        paddingHorizontal:5,
        paddingTop:1,
    },
    textName:{
        fontSize: 17,
        paddingHorizontal:5,

    }
})