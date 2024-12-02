import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardMedium from './CardMedium';
import { useRoute } from '@react-navigation/native';
import { MAINCOLOR } from '../constants/color';


const ProductFilter = ({ navigation }) => {
  const route = useRoute();

  const { products } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Danh sách sản phẩm</Text>
        <View style={{ width: 26 }} />
      </View>
      <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}>
        <View>
          {products.length === 0 ?(
    <Text style={styles.noProductsText}>Không có sản phẩm nào.</Text> ):
          (products.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <View
                  key={index}
                  style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}
                >
                  <CardMedium data={item} />
                  {products[index + 1] && <CardMedium data={products[index + 1]} />}
                </View>
              );
            }
            return null;
          }))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductFilter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
})