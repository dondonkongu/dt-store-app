import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from './Card';
import CardMedium from './CardMedium';


const ProductList = ({ title, products }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'  }}>
                <Text style={{ fontSize: 17,paddingHorizontal:5 }}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingHorizontal:5}}>
                    <Text style={{ fontSize: 15, color: '#999999', }}>Xem thêm</Text>
                    <Ionicons name='arrow-forward' size={18} color='#ccc' />
                </View>
            </View>
            <View>
                <FlatList
                directionalLockEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{ paddingTop:5 }}>
                            <CardMedium data={item} />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                </View>
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})