import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from './Card';

const collectionData = 
    {
        id: 1,
        title: 'SIMPLE but CLASSY',
        description : "𝐒𝐢𝐦𝐩𝐥𝐞 𝐛𝐮𝐭 𝐂𝐥𝐚𝐬𝐬𝐲..\nThời trang đơn giản nhưng thời thượng, kết hợp giữa thiết kế tối giản và sự tinh tế hiện đại, mang lại vẻ đẹp thanh lịch và dễ phối đồ.\nPhong cách này chú trọng vào đường nét gọn gàng và chi tiết tinh tế, phù hợp với nhiều dịp khác nhau...",
        img:'https://media.fmplus.com.vn/uploads/tags/213def24-a09e-4514-b65c-32244fc88dc9.jpg',
        products:[
            {
                id: 1,
                name: 'Áo sơ mi trắng',
                price: 200000,
                url: 'https://media.fmplus.com.vn/uploads/products/2407AKUT8880302/859d757e-f2de-48da-a76a-0945419ada2b.jpg'
            },
            {
                id: 2,
                name: 'Quần âu xám',
                price: 300000,
                url: 'https://media.fmplus.com.vn/uploads/products/2407AKUT8880302/859d757e-f2de-48da-a76a-0945419ada2b.jpg'
            },
            {
                id: 3,
                name: 'Áo khoác da',
                price: 500000,
                url: 'https://media.fmplus.com.vn/uploads/products/2407AKUT8880302/859d757e-f2de-48da-a76a-0945419ada2b.jpg'
            },
            {
                id: 4,
                name: 'Giày da',
                price: 400000,
                url: 'https://media.fmplus.com.vn/uploads/products/2407AKUT8880302/859d757e-f2de-48da-a76a-0945419ada2b.jpg'
            }
        ]

    }



const Collection = () => {
    return (
        <View style={{ backgroundColor:'#fff',paddingHorizontal:5 }}>
           <View style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
            <Text style={{ color:'#CC3333', fontSize:17 }}>{collectionData.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingHorizontal:5}}>
                    <Text style={{ fontSize: 15, color: '#999999', }}>Xem thêm</Text>
                    <Ionicons name='arrow-forward' size={18} color='#ccc' />
                </View>
           </View> 
            <Text style={{ padding:10, fontSize:15 }} numberOfLines={2}>{collectionData.description}</Text>
            <Image source={{ uri: collectionData.img }} style={{ width: '100', height: 280 }} resizeMode='contain' />
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
