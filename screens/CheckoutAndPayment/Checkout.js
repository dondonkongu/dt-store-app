import { SafeAreaView, StyleSheet, View, Text, TextInput, Image,Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MyAppTitle from '../../components/MyAppTitle';
import LineWithoutTitle from '../../components/LineWithoutTitle';
import Button from '../../components/Button';
import AuthContext from '../../context/AuthContext';
import { useRoute } from '@react-navigation/native';
import { getUserDetail } from '../../service/asyncStorageService';
import BASE_URL from '../../api';


const Checkout = ({ navigation }) => {
  const route = useRoute();
  const { product, imageUrl, variant, quantity } = route.params;

  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  const [data, setData] = useState({
    userId: '',
    firstName: '',
    phoneNumber: '',
    address: '',
    note: '',
  });


  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isLoggedIn) {
        try {
          const dataUser = await getUserDetail();
          const parsedData = typeof dataUser === "string" ? JSON.parse(dataUser) : dataUser;
          
          if (parsedData) {
            setData({
              userId: parsedData.id || '',
              firstName: parsedData.firstName || '',
              address: parsedData.address || '',
              phoneNumber: parsedData.phoneNumber || '',
              note: '', 
            });
          }
        } catch (error) {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
      }
    };
  
    fetchUserDetails(); 
  }, [isLoggedIn]);

  const handleOrder = async () => {
    if (!data.firstName || !data.phoneNumber || !data.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const orderItems = [
      {
        variantId: variant.id,
        quantity: quantity,
      },
    ];

    const orderData = {
      userId: data.userId,  
      phoneNumber: data.phoneNumber,
      shippingAddress: data.address,
      items: orderItems,
      totalPrice: product.price * quantity + 30000,
      note: data.note || '',
    };

    console.log('Data order:', orderData);
        try {
          const response = await BASE_URL.post('/order/create', orderData);
          Alert.alert('Thông báo', 'Đặt hàng thành công', [
            {text: 'OK', onPress: () =>  navigation.navigate('BottomTabs')},
          ]
          );
          navigation.navigate('BottomTabs');
          return response.data.result;
        } catch (error) {
          console.error('Error creating order', error);
          alert('Đặt hàng thất bại!');
        }
      
  };

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
              value={data.firstName}
              onChangeText={text => setData({ ...data, firstName: text })}
            />
          </View>
          <View>
            <Text>Số điện thoại</Text>
            <TextInput
              placeholder='Nhập số điện thoại'
              style={styles.input}
              value={data.phoneNumber}
              onChangeText={text => setData({ ...data, phoneNumber: text })}
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
              <Image source={{ uri: imageUrl }} style={{ width: 80, height: 100 }} resizeMode='contain' />
            </View>
            <View style={styles.infoProduct}>
              <Text style={{ fontSize: 17, fontWeight: '600' }} numberOfLines={1}>{product.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>Màu: {variant.color}</Text>
                <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
                <Text>Size : {variant.size}</Text>
              </View>
              <Text style={{ marginTop: 10, color: 'red', fontSize: 15 }}>{product.price.toLocaleString('vi-VN')} VND</Text>
              <Text style={{ color: '#ccc' }}>Số lượng: {quantity}</Text>
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
              <Text>{(product.price * quantity).toLocaleString('vi-VN')} VND</Text>
            </View>
            <View style={styles.total}>
              <Text>Phí vận chuyển</Text>
              <Text>30.000 VND</Text>
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
              <Text style={{ color: 'red', fontSize: 20 }}>{(product.price * quantity + 30000).toLocaleString('vi-VN')} VND</Text>
            </View>
            <Button title="Đặt hàng" width={120} height={40} onPress={handleOrder} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  content: {},
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
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  }
});
