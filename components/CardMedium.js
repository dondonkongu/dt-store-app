import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CardMedium = ({data}) => {
    const nav = useNavigation();


    const mainImage = data.images?.find((image) => image.isMain);
    const imageUrl = mainImage ? mainImage.url : null;
  return (
    <TouchableOpacity style={{ width: 205, height: 310, justifyContent:'center', alignItems:'center', paddingTop:10}}onPress={()=>nav.navigate('DetailProduct',{idProduct:data.id,imageUrl:imageUrl})}>
        <View >
            <Image source={{ uri:imageUrl }}
            style={{ width: 205, height: 250 }} resizeMode='contain'
            />  
            <Text style={styles.textPrice}>{data.price.toLocaleString('vi-VN')} VND</Text>
            <Text style={styles.textName} numberOfLines={1}>{data.name}</Text>
        </View>
        
    </TouchableOpacity>
  )
}

export default CardMedium

const styles = StyleSheet.create({
    textPrice: {
        fontSize: 17,
        color: 'red',
        paddingHorizontal:10,
        paddingTop:1,
    },
    textName:{
        fontSize: 17,
        paddingHorizontal:10,

    }
})