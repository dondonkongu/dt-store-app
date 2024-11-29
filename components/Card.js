import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = ({ data }) => {
    const nav = useNavigation();
    
    
    const mainImage = data.images?.find((image) => image.isMain);
    const imageUrl = mainImage ? mainImage.url : null;

    
  return (
    <TouchableWithoutFeedback style={{ width: 140, height: 250 }} onPress={()=>nav.navigate('DetailProduct',{idProduct:data.id,imageUrl:imageUrl})}>
      <View style={{ width: 140, height: 250 }}>
        <Image 
          source={{ uri: imageUrl}}
          style={{ width: 140, height: 200 }} 
          resizeMode='contain'
        />  
        <Text style={styles.textPrice}>{data.price.toLocaleString('vi-VN')} VND</Text>
        <Text style={styles.textName} numberOfLines={1}>{data.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  textPrice: {
    fontSize: 17,
    color: 'red',
    paddingHorizontal: 5,
    paddingTop: 1,
  },
  textName: {
    fontSize: 17,
    paddingHorizontal: 5,
  }
});
