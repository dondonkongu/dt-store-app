import { SafeAreaView, StyleSheet, View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyAppTitle from '../../components/MyAppTitle';
import LineWithoutTitle from '../../components/LineWithoutTitle';
import Button from '../../components/Button';


const Checkout = ({ navigation }) => {

  const [data, setData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  })
  return (
    <SafeAreaView style={styles.container}>
      <MyAppTitle title="Vận chuyển" navigation={navigation} />
      <View style={styles.content}>
        <View style={{ backgroundColor: '#fff', padding: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="location" size={26} color="black" />
            <Text>Thông tin nhận hàng</Text>
          </View>
          <View>
            <Text>Họ và tên</Text>
            <TextInput
              placeholder='Nhập họ và tên'
              style={styles.input}
              value={data.name}
              onChangeText={text => setData({ ...data, name: text })}
            />
          </View>
          <View>
            <Text>Số điện thoại</Text>
            <TextInput
              placeholder='Nhập số điện thoại'
              style={styles.input}
              value={data.phone}
              onChangeText={text => setData({ ...data, phone: text })}
            />
          </View>
          <View>
            <Text>Địa chỉ</Text>
            <TextInput
              placeholder='Nhập địa chỉ cụ thể'
              style={styles.input}
              value={data.address}
              onChangeText={text => setData({ ...data, address: text })}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.info}>
            <View style={styles.imageModal}>
              <Image source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg' }} style={{ width: 80, height: 100 }} resizeMode='contain' />
            </View>
            <View style={styles.infoProduct}>
              <Text style={{ fontSize: 17, fontWeight: '600' }} numberOfLines={1}>ten san pham</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>mau: den</Text>
                <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
                <Text>size : L</Text>
              </View>
              <Text style={{ marginTop: 10, color: 'red', fontSize: 15 }}>329.000 vnd</Text>
              <Text style={{ color: '#ccc' }}>Số lượng: 1</Text>
            </View>
            <View>
            </View>
          </View>
          <View>
            <TextInput
              placeholder='Nhập ghi chú tại đây'
              style={styles.input}
              value={data.note}
              onChangeText={text => setData({ ...data, note: text })}
            />
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection:'row', alignItems:'center', gap:10 }}>
            <Ionicons name="receipt-outline" size={26} color="black" />
            <Text>Chi tiết thanh toán</Text>
          </View>
          <LineWithoutTitle/>
          <View>
            <View style={styles.total}>
              <Text>Tổng tiền hàng</Text>
              <Text>329.000 vnd</Text>
            </View>
            <View style={styles.total}>
              <Text>Phí vận chuyển</Text>
              <Text>30.000 vnd</Text>
            </View>
            <View style={styles.total}>
              <Text>Giảm giá</Text>
              <Text>0 vnd</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
            <View>
            <Text>Tổng thanh toán</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>359.000 vnd</Text>
            </View>
            <Button title="Đặt hàng" width={120} height={40}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  content: {
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  box: {
    backgroundColor: 'white',
    marginTop: 5,
    padding: 10,

  },
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  infoProduct: {
    width: '65%',
  },
  total:{
    flexDirection:'row',
     justifyContent:'space-between',
      alignItems:'center',
      paddingVertical:5,
  }

})