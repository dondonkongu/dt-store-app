import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardMedium from './CardMedium';


const ProductList = ({ title, products }) => {
    const data = products.slice(0, 6)
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
            {data.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <View 
                                key={index} 
                                style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}
                            >
                                <CardMedium data={item} />                               
                                {data[index + 1] && <CardMedium data={data[index + 1]} />}
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