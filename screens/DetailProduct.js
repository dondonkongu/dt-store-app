import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import LineWithoutTitle from '../components/LineWithoutTitle'
import Button from '../components/Button'
import { MAINCOLOR } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipperDetailProduct from '../components/SwipperDetailProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SizeChart from '../components/SizeChart';
import { useRoute } from '@react-navigation/native';
import BASE_URL from '../api';


const DetailProduct = ({ navigation }) => {

  const route = useRoute();
  const { idProduct } = route.params;
  const { imageUrl } = route.params;



  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [imageUrls, setImageUrls] = useState([]);

  const [selectedSize, setSelectedSize] = useState(null);

  const [totalSold, setTotalSold] = useState('');
  const [totalRemain, setTotalRemain] = useState('')


  const [solded, setSolded] = useState('');
  const [remain, setRemain] = useState('')
  const [selectedColor, setSelectedColor] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);

  const [variants, setVariants] = useState([]);

  const fetchVariants = async () => {
    try {
      const response = await BASE_URL.get(`/dt-store/variants/product/${idProduct}`)
      setVariants(response.data.result)
     
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProduct()
    fetchVariants()
    
  }, []);

  useEffect(() => {
    if (variants.length > 0) {
      const sold = variants.reduce((total, variant) => total + variant.sold, 0);
    const remaining = variants.reduce((total, variant) => total + variant.stock, 0);
    console.log(sold);
    setSolded(sold);
    setRemain(remaining - sold);

    setTotalSold(sold);
    setTotalRemain(remaining);

    }
  }, [variants]);


  const handleColorSelect = (color) => {
    console.log(color);
    
    setSelectedColor(color);
    const availableSizes = variants.filter((variant) => variant.color === color);
    console.log(availableSizes);
    
    setAvailableSizes(availableSizes.length > 0 ? availableSizes : []);
    setSelectedSize(null);
    setSolded(0);
    setRemain(0);
  };


  const handleSizeSelect = (item) => {
    setSelectedSize(item.size);
    setSolded(item.sold);
    setRemain(item.stock - item.sold);
  };



  const fetchProduct = async () => {
    try {
      const response = await BASE_URL.get(`/dt-store/products/${idProduct}`)
      setProduct(response.data.result)
      setImageUrls(response.data.result.images)
    } catch (err) {
      console.log(err);
    }
  }
  

  const uniqueColors = [...new Set(variants.map((variant) => variant.color))];

 


  const handleBuy = () => {
    setIsModalVisible(false)
    navigation.navigate('Checkout')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={30} color='white' onPress={() => navigation.goBack()} />
        <Ionicons name='cart-outline' size={26} color='#fff' />
      </View>
      <ScrollView style={styles.content}>
        <SwipperDetailProduct img={imageUrls} />
        <View style={{ paddingHorizontal: 10, borderBottomWidth: 1, borderColor: "#ccc", backgroundColor: '#fff' }}>
          <View style={[styles.nameProduct, { marginVertical: 10 }]}>
            <Text style={{ fontSize: 17, fontWeight: 600, width: '95%' }} numberOfLines={1}>{product.name}</Text>
            <Ionicons name='heart-outline' size={23} color='black' />
          </View>
          <View style={styles.nameProduct}>
            <Text style={{ color: 'red', fontSize: 17 }}>
              {product?.price !== undefined
                ? `${product.price.toLocaleString('vi-VN')} VND`
                : 'Price not available'}
            </Text>
            <View style={styles.nameProduct}>
              <Text>
                Đã bán : {totalSold}
              </Text>
              <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
              <Text>
                Còn lại : {totalRemain}
              </Text>
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
          <View style={{ paddingVertical: 10, gap: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: '600', paddingBottom: 5 }}>CHI TIẾT SẢN PHẨM</Text>
            <Text style={{ fontSize: 14 }}>-Tên sản phẩm: {product?.name ?? 'Không có thông tin'}</Text>
            <Text style={{ fontSize: 14 }}>-Chất liệu: {product?.material ?? 'Không có thông tin'}</Text>
            <Text style={{ fontSize: 14 }}>
              -Màu sắc: {uniqueColors.join(' | ') || 'Không có thông tin'}
            </Text>
            <Text style={{ fontSize: 14 }}>
              -Kích cỡ : {[...new Set(variants.map((variant) => variant.size))].join('/') || 'Không có thông tin'}

            </Text>
            <Text style={{ fontSize: 14 }}>-Xuất xứ: {product?.origin ?? 'Không có thông tin'}</Text>
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

      <Modal visible={isModalVisible} transparent={true} animationType='slide'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', width: '100%', height: 450, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

            <View style={styles.headerModal}>
              <View style={styles.imageModal}>
                <Image source={{ uri: imageUrl }} style={{ width: 80, height: 100 }} resizeMode='contain' />
              </View>
              <View style={styles.infoProduct}>
                <Text style={{ fontSize: 17, fontWeight: '600' }} numberOfLines={1}>{product.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text>da ban :{solded}</Text>
                  <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
                  <Text>con lai : {remain}</Text>
                </View>
                <Text style={{ marginTop: 20, color: 'red', fontSize: 15 }}>
                  {product?.price !== undefined
                    ? `${product.price.toLocaleString('vi-VN')} VND`
                    : 'Price not available'}</Text>
              </View>
              <View>
                <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)} style={{ position: 'absolute', top: 0, right: 0 }}>
                  <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10 }}>
                    <Ionicons name='close' size={30} color='black' />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#ccc', }}></View>
            <View style={{ padding: 10 }}>
              <Text style={{ marginBottom: 10 }}>Màu sắc</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                {uniqueColors.map((item,index) => (
                  <TouchableWithoutFeedback key={index} onPress={() => handleColorSelect(item)}>
                    <View
                      style={{
                        borderColor: selectedColor === item ? 'red' : '#ccc',
                        borderWidth: 1,
                      }}>
                      <Text style={{ padding:5 }}>{item}</Text>
                    </View>

                  </TouchableWithoutFeedback>
                ))}
              </View>

              <Text style={{ marginBottom: 10 }}>Kích thước</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {availableSizes.map((item, index) => (
                  <TouchableWithoutFeedback key={index} onPress={() => handleSizeSelect(item)}>
                    <View
                      style={{
                        width: 50,
                        height: 40,
                        borderRadius: 5,
                        borderColor: selectedSize === item.size ? 'red' : '#ccc',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                      }}
                    >
                      <Text>{item.size}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))}
              </View>

            </View>
            <LineWithoutTitle />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
              <Button title='Mua ngay' width='100%' height={40} onPress={handleBuy} />
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