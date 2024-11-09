import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useState } from 'react'
import { MAINCOLOR } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipperDetailProduct from '../components/SwipperDetailProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SizeChart from '../components/SizeChart';
import Button from '../components/Button';




const img = [
  { id: 1, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg' },
  { id: 2, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/f5316516-74df-44c2-8814-583f32a19cff.jpg' },
  { id: 2, link: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/09c33213-e804-48d3-af45-86d068f8b214.jpg' },

]
const DetailProduct = ({ navigation }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, paddingBottom: 5 }}>CHI TIẾT SẢN PHẨM</Text>
            <Text style={{ fontSize: 14 }}>-Tên sản phẩm: </Text>
            <Text style={{ fontSize: 14 }}>-Chất liệu: </Text>
            <Text style={{ fontSize: 14 }}>-Màu sắc: </Text>
            <Text style={{ fontSize: 14 }}>-Họa tiết: </Text>
            <Text style={{ fontSize: 14 }}>-Xuất xứ: </Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600 }}>HƯỚNG DẪN CHỌN SIZE</Text>
            <SizeChart />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, paddingBottom: 5 }}>HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG</Text>
            <Text style={{ fontSize: 14 }}>- Lần đầu chỉ xả nước lạnh và nước xả vải rồi phơi khô để đảm bảo chất và màu của sản phẩm.</Text>
            <Text style={{ fontSize: 14 }}>- Nhớ lộn trái sản phẩm khi giặt và không giặt ngâm</Text>
            <Text style={{ fontSize: 14 }}>- Không sử dụng thuốc tẩy.</Text>
            <Text style={{ fontSize: 14 }}>- Khi phơi lộn trái và không phơi trực tiếp dưới ánh nắng mặt trời</Text>
          </View>
        </View>

      </ScrollView>
      <View style={styles.action}>
        <View style={[styles.nameProduct, { padding: 10, backgroundColor: '#fff', borderTopWidth: 0.5, borderColor: '#ccc' }]}>
          <TouchableWithoutFeedback onPress={() => console.log('chat')} >
            <View style={styles.bottomItem}>
              <FontAwesome name='commenting-o' size={25} color='black' />
              <Text>Chat ngay</Text>
            </View>
          </TouchableWithoutFeedback >
          <View style={{ width: 1, backgroundColor: '#ccc', height: 40, marginHorizontal: 5 }}></View>
          <TouchableWithoutFeedback onPress={() => console.log('gio hang')}>
            <View style={styles.bottomItem}>
              <FontAwesome name='cart-plus' size={25} color='black' />
              <Text>Giỏ hàng</Text>
            </View>
          </TouchableWithoutFeedback >
          <Button title='Mua ngay' height={40} width={120} onPress={() => setIsModalVisible(true)} />
        </View>
      </View>




      {/* modal do toi code chua hoan thanh */}

      <Modal visible={isModalVisible} transparent={true} animationType='slide'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', width: '100%', height: 450, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
           
            <View style={styles.headerModal}>
              <View style={styles.imageModal}>
                <Image source={{ uri: 'https://media-fmplus.cdn.vccloud.vn/uploads/products/2405ASUO0042101/5283b2af-8bb8-4d6d-afc8-a267998edf5f.jpg' }} style={{ width: 80, height: 100 }} resizeMode='contain' />
              </View>
              <View style={styles.infoProduct}>
                <Text style={{ fontSize: 17, fontWeight: '600' }} numberOfLines={1}>ten san pham</Text>
                <View style={{ flexDirection: "row",alignItems: "center" }}>
                  <Text>da ban :114</Text>
                  <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
                  <Text>con lai : 100</Text>
                </View>
                <Text style={{ marginTop: 20, color: 'red', fontSize: 15 }}>329.000 vnd</Text>
              </View>
              <View>
              <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)} style={{ position:'absolute',top:0,right:0 }}>
              <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                <Ionicons name='close' size={30} color='black' />
              </View>
            </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#ccc', }}></View>
            <View style={{ padding: 10 }}>
              <Text style={{ marginBottom: 10 }}>Mau sac</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <TouchableWithoutFeedback onPress={() => console.log('mau sac')}
                >
                  <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 999, borderColor: '#ccc', borderWidth: 1 }}></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => console.log('mau sac')}
                >
                  <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 999, borderColor: '#ccc', borderWidth: 1 }}></View>
                </TouchableWithoutFeedback>
              </View>
              <Text style={{ marginBottom: 10 }}>Size</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, }}>
                <TouchableWithoutFeedback onPress={() => console.log('size')}>
                  <View style={{ width: 50, height: 40, backgroundColor: '#fff', borderRadius: 999, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center', }}>
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>S</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => console.log('mau sac')}
                >
                  <View style={{ width: 50, height: 40, backgroundColor: '#fff', borderRadius: 999, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>M</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => console.log('mau sac')}
                >
                  <View style={{ width: 50, height: 40, backgroundColor: '#fff', borderRadius: 999, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 17 }}>L</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#ccc', }}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
              <Text style={{ padding: 10 }}>Số lượng</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <TouchableWithoutFeedback onPress={() => console.log('tru')}>
                  <View style={{ width: 30, height: 30, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>-</Text>
                  </View>
                </TouchableWithoutFeedback>
                <Text style={{ paddingHorizontal: 10 }}>1</Text>
                <TouchableWithoutFeedback onPress={() => console.log('cong')}>
                  <View style={{ width: 30, height: 30, backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>+</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{flex:1,justifyContent:'center', alignItems:'center', padding:10 }}>
              <Button title='Mua ngay' width='100%' height={40} />
            </View>

          </View>
        </View>
      </Modal>







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
  bottomItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 100,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    gap: 10,
  },
  infoProduct: {
    width: '65%',
  }

})