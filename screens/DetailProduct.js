import { StyleSheet, Text, View,SafeAreaView,Image, ScrollView } from 'react-native'
import React from 'react'
import { MAINCOLOR } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import SwipperDetailProduct from '../components/SwipperDetailProduct';




const img =[
  {id:1,link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg'},
  {id:2, link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/f5316516-74df-44c2-8814-583f32a19cff.jpg'},
  {id:2, link:'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/09c33213-e804-48d3-af45-86d068f8b214.jpg'},

]
const DetailProduct = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={30} color='white' onPress={()=>navigation.goBack()} />
        <Ionicons name='cart-outline' size={26} color='#fff' />      
      </View>
      <ScrollView>
      {/* <Swiper loop={true} showsButtons >
        {img.map((item,index)=>{
            return(
                <View key={index} style={{flex:1}}>
                <Image source={{uri:item.link}} style={{width:'100%',height:500}}/>
                </View>
            )
            })}
        </Swiper> */}
        <SwipperDetailProduct/>
        </ScrollView>
      </SafeAreaView>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0', 
      },
      header: {
        backgroundColor: MAINCOLOR,
        width: '100%',
        paddingHorizontal:10,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 5,
      },
     
})