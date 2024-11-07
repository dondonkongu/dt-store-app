import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { MAINCOLOR } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipperDetailProduct from '../components/SwipperDetailProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SizeChart from '../components/SizeChart';



const img = [
  { id: 1, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg' },
  { id: 2, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/f5316516-74df-44c2-8814-583f32a19cff.jpg' },
  { id: 2, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/09c33213-e804-48d3-af45-86d068f8b214.jpg' },

]
const DetailProduct = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={30} color='white' onPress={() => navigation.goBack()} />
        <Ionicons name='cart-outline' size={26} color='#fff' />
      </View>
      <ScrollView style={styles.content}>
        <SwipperDetailProduct />
        <View style={{ paddingHorizontal: 10, borderBottomWidth: 1, borderColor: "#ccc", backgroundColor: '#fff' }}>
          <View style={styles.nameProduct}>
            <Text style={{ fontSize: 17, fontWeight: 600, width: '95%' }} numberOfLines={1}>ten san phammm</Text>
            <Ionicons name='heart-outline' size={23} color='black' />
          </View>
          <View style={styles.nameProduct}>
            <Text style={{ color: 'red', fontSize: 17 }}>369.000 vnd</Text>
            <View style={styles.nameProduct}>
              <Text>da ban :114</Text>
              <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
              <Text>con lai : 100</Text>
            </View>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#ccc', }}></View>
          <View style={styles.nameProduct}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ShippingPolicy')}>
              <View style={[styles.nameProduct, { gap: 10, padding: 15 }]}>
                <FontAwesome name='truck' size={20} color='red' />
                <Text style={{ fontSize: 15 }}>Chính sách vận chuyển</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ReturnPolicy')}>
              <View style={[styles.nameProduct, { gap: 10, padding: 15 }]}>
                <FontAwesome name='exchange' size={20} color='red' />
                <Text style={{ fontSize: 15 }}>Bảo hành & Đổi trả</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.detailProduct}>
          <View style={{ paddingVertical:10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600,paddingBottom:5 }}>CHI TIẾT SẢN PHẨM</Text>
            <Text style={{ fontSize: 14 }}>-Tên sản phẩm: </Text>
            <Text style={{ fontSize: 14 }}>-Chất liệu: </Text>
            <Text style={{ fontSize: 14 }}>-Màu sắc: </Text>
            <Text style={{ fontSize: 14 }}>-Họa tiết: </Text>
            <Text style={{ fontSize: 14 }}>-Xuất xứ: </Text>
          </View>
          <View style={{ paddingVertical:10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600 }}>HƯỚNG DẪN CHỌN SIZE</Text>
            <SizeChart />
          </View>
          <View style={{ paddingVertical:10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600 , paddingBottom:5}}>HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG</Text>
            <Text style={{ fontSize: 14 }}>- Lần đầu chỉ xả nước lạnh và nước xả vải rồi phơi khô để đảm bảo chất và màu của sản phẩm.</Text>
            <Text style={{ fontSize: 14 }}>- Nhớ lộn trái sản phẩm khi giặt và không giặt ngâm</Text>
            <Text style={{ fontSize: 14 }}>- Không sử dụng thuốc tẩy.</Text>
            <Text style={{ fontSize: 14 }}>- Khi phơi lộn trái và không phơi trực tiếp dưới ánh nắng mặt trời</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  content: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc'
  },
  header: {
    backgroundColor: MAINCOLOR,
    width: '100%',
    paddingHorizontal: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  nameProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailProduct: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },

})