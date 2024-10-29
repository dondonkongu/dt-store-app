import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import React from 'react'



const SwipperBanner = ({data}) => {
  return (
   <Swiper style={{  }} loop={true} autoplay={true}>

    {data.map((item,index)=>{
        return(
            <View key={index} style={{flex:1}}>
            <Image source={{uri:item.link}} style={{width:'100%',height:200}}/>
            </View>
        )
        })}

   </Swiper>
  )
}

export default SwipperBanner

const styles = StyleSheet.create({})