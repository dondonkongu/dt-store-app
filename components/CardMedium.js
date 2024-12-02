import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native';

const CardMedium = ({data}) => {
    const nav = useNavigation();


    const mainImage = data.images?.find((image) => image.isMain);
    const imageUrl = mainImage ? mainImage.url : null;
  return (
    <TouchableOpacity style={{ width: 205, height: 310, justifyContent:'center', alignItems:'center', paddingTop:10}}onPress={()=>nav.navigate('DetailProduct',{idProduct:data.id})}>
        <View >
            <Image source={{ uri:imageUrl }}
            style={{ width: 205, height: 250 }} resizeMode='contain'
            />  
            <Text style={styles.textPrice}>299.000 VND</Text>
            <Text style={styles.textName} numberOfLines={1}>{data.name}</Text>
        </View>
        
    </TouchableOpacity>
  )
}

export default memo(CardMedium)

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
