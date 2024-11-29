import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from './Card';
import BASE_URL from '../api';

const Collection = () => {
    const [collectionData, setCollectionData] = useState([])

    const fetchCollection = async () => {
        try {
            const response = await BASE_URL.get('/dt-store/collections/1')
            setCollectionData(response.data.result)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCollection()
    }, [])

    return (
        <View style={{ backgroundColor:'#fff',paddingHorizontal:5 }}>
           <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
            <Text style={{ color:'#CC3333', fontSize:17 }}>{collectionData.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingHorizontal:5}}>
                    <Text style={{ fontSize: 15, color: '#999999', }}>Xem thêm</Text>
                    <Ionicons name='arrow-forward' size={18} color='#ccc' />
                </View>
           </View> 
            <Text style={{ padding:10, fontSize:15 }} numberOfLines={2}>{collectionData.description}</Text>
            <Image source={{ uri: collectionData.url }} style={{ width: '100', height: 280 }} resizeMode='contain' />
            <View style={{  }}>
            <FlatList
            style={{ padding: 5,marginTop:5 }}
                data={collectionData.products}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{  }}>
                      <Card data={item} />
                    </View>
                  )}
                  keyExtractor={item => item.id}
            />
            </View>
        </View>
    )
}

export default Collection

const styles = StyleSheet.create({})
