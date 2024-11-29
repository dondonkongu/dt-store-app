import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardMedium from './CardMedium';
import { useEffect, useState } from 'react';
import BASE_URL from '../api';


const ProductList = ({ title }) => {

        const [products,setProducts] = useState([])
      
        const fetchProducts = async()=>{
          try{
            const response = await BASE_URL.get('/dt-store/products/sort/totalSold?page=1&size=6')
            setProducts(response.data.result.data)
          }catch(err){
            console.log(err);
          }
        }
        
        useEffect(()=>{
          fetchProducts()
        },[])

    return (
        <View style={{ backgroundColor:'#fff',paddingHorizontal:5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'  }}>
                <Text style={{ fontSize: 17 }}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 15, color: '#999999', }}>Xem thêm</Text>
                    <Ionicons name='arrow-forward' size={18} color='#ccc' />
                </View>
            </View>
            <View>
            {products.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <View 
                                key={index} 
                                style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}
                            >
                                <CardMedium data={item} />                               
                                {products[index + 1] && <CardMedium data={products[index + 1]} />}
                            </View>
                        );
                    }
                    return null;
                })}
                </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})