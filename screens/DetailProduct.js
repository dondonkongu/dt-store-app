import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MAINCOLOR } from '../constants/color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwipperDetailProduct from '../components/SwipperDetailProduct';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SizeChart from '../components/SizeChart';
import Button from '../components/Button';
import LineWithoutTitle from '../components/LineWithoutTitle';
import { useRoute } from '@react-navigation/native';
import BASE_URL from '../api';


const DetailProduct = ({ navigation }) => {

  const route = useRoute();
  const { idProduct } = route.params;
  const { imageUrl } = route.params;
  console.log(idProduct);



  const [isModalVisible, setIsModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [imageUrls, setImageUrls] = useState([]);

  const [selectedSize, setSelectedSize] = useState(null);
  const [solded, setSolded] = useState(0);
  const [remain, setRemain] = useState(0)
  const [selectedColor, setSelectedColor] = useState(null); // Màu sắc được chọn
  const [availableSizes, setAvailableSizes] = useState([]); // Các kích thước theo màu


  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const selectedImage = product.images.find((image) => image.color === color);
    setAvailableSizes(selectedImage?.sizes || []);
    setSelectedSize(null); // Reset kích thước đã chọn
    setSolded(0); // Reset số lượng đã bán
    setRemain(0); // Reset số lượng còn lại
  };


  const handleSizeSelect = (size) => {
    setSelectedSize(size.name);
    setSolded(size.sold);
    setRemain(size.quantity - size.sold);
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
  const sold = product?.images
    ?.flatMap((image) => image.sizes)
    ?.reduce((total, size) => total + size.sold, 0) ?? 0

  const remaining = product?.images
    ?.flatMap((image) => image.sizes)
    ?.reduce((total, size) => total + size.quantity, 0) ?? 0

  useEffect(() => {
    fetchProduct()
  }, [])


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
                Đã bán : {sold}
              </Text>
              <View style={{ width: 1, backgroundColor: '#ccc', height: 13, marginHorizontal: 5 }}></View>
              <Text>
                Còn lại : {remaining}
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
              -Màu sắc: {product?.images?.map(image => image.color).join('/') ?? 'Không có thông tin'}
            </Text>
            <Text style={{ fontSize: 14 }}>
              -Kích cỡ :
              {product?.images
                ? [...new Set(product.images.flatMap(image => image.sizes.map(size => size.name)))].join(' / ')
                : 'Không có thông tin'}
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




      {/* modal do toi code chua hoan thanh */}

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
                <Text style={{ marginTop: 20, color: 'red', fontSize: 15 }}>{product?.price !== undefined
                  ? `${product.price.toLocaleString('vi-VN')} VND`
                  : 'not available'}</Text>
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
              {/* Màu sắc */}
              <Text style={{ marginBottom: 10 }}>Màu sắc</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                {product?.images?.map((image) => (
                  <TouchableWithoutFeedback key={image.color} onPress={() => handleColorSelect(image.color)}>
                    <Image
                      source={{ uri: image.url }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 999,
                        borderColor: selectedColor === image.color ? 'red' : '#ccc',
                        borderWidth: 1,
                      }}
                    />
                  </TouchableWithoutFeedback>
                ))}
              </View>

              {/* Kích thước */}
              <Text style={{ marginBottom: 10 }}>Kích thước</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {availableSizes.map((size) => (
                  <TouchableWithoutFeedback key={size.name} onPress={() => handleSizeSelect(size)}>
                    <View
                      style={{
                        width: 50,
                        height: 40,
                        borderRadius: 5,
                        borderColor: selectedSize === size.name ? 'red' : '#ccc',
                        borderWidth: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                      }}
                    >
                      <Text>{size.name}</Text>
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