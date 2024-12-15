import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = ({ data }) => {
    const nav = useNavigation();
    
    let imageUrl = null;

  if (Array.isArray(data.images)) {
    const mainImage = data.images.find((image) => image.isMain);
    imageUrl = mainImage ? mainImage.url : null;
  } else {
    imageUrl = data.images;
    
  }
 
  return (
    <TouchableWithoutFeedback style={{ width: 140, height: 250 }} 
    onPress={() => {
      if (data && data.id) {
        nav.replace('DetailProduct', { idProduct: data.id });
      }
    }}>
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
