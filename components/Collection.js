import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';

const Collection = ({data}) => {
    const nav = useNavigation()

    const windowWidth = Dimensions.get('window').width; 
   
    return (
        <View style={{ backgroundColor:'#fff',paddingHorizontal:5 }}>
           <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
            <Text style={{ color:'#CC3333', fontSize:17 }}>{data.name}</Text>
            <TouchableOpacity onPress={()=>nav.navigate('CollectionDetail',{collectionData:data})}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingHorizontal:5}}>
                    <Text style={{ fontSize: 15, color: '#999999', }}>Xem thêm</Text>
                    <Ionicons name='arrow-forward' size={18} color='#ccc' />
                </View>
                </TouchableOpacity>
           </View> 
            <Text style={{ padding:10, fontSize:15 }} numberOfLines={2}>{data.description}</Text>
            <Image source={{ uri: data.url }} style={{ width:windowWidth , height: 280,paddingRight:5 }} resizeMode='stretch' />
            <View style={{  }}>
            <FlatList
            style={{ padding: 5,marginTop:5 }}
                data={data.products}
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
