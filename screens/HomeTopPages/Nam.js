import {  StyleSheet,  View , Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import BASE_URL from '../../api'
import SwipperCategories from '../../components/SwipperCategories'
import ProductSection from '../../components/ProductSection'
import Collection from '../../components/Collection'

const Nam = ({}) => {
  const categories =[
    { id: 8, name: 'Áo thun',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/247f5276-51d5-407b-821d-4efd30b8435b.png' },
    { id: 9, name: 'Áo Polo',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/f2e21cbb-cc42-451b-9726-a44f01c376ff.png' },
    { id: 10, name: 'Áo sơ mi',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/52a1a466-6895-4e0a-a3b5-22ccb97f4680.png' },
    { id: 11, name: 'Áo khoác',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/ddf917e2-f8a9-4b1b-9781-e19328af0f69.png' },
    { id: 12, name: 'Quần short',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/342843e8-9b96-486c-a45b-55884d0fcd92.png' },
    { id: 13, name: 'Quần Kaki',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/c2838748-5038-4b3f-95f3-7e262a2e7b36.png' },
  ]

  const [products, setProducts]= useState([])
  const [collectionData, setCollectionData] = useState([])

  const fetchCollection = async () => {
    try {
        const response = await BASE_URL.get('/dt-store/collections/2')
        setCollectionData(response.data.result)
    } catch (err) {
        console.log(err);
    }
}

  useEffect(() => {
    fetchProducst()
    fetchCollection()
  }, [])

  const fetchProducst =async()=>{
     await BASE_URL.get('/dt-store/products/subcategory/1')
     .then((response)=>{
       setProducts(response.data.result)
     })
     .catch((err)=>{
       console.log(err);
     })
  }  


  const sections =[
    { key:'banner',component: <View>
      <Image
      source={require('../../assets/banner-thoi-trang-nam.jpg')}
      style={{ width: '100%', height: 150 }}
      resizeMode='stretch'
      />
    </View>},
    {key:'categories',component:<SwipperCategories data={categories}/>},
    {key:'lastedProducts',component:<ProductSection products={products} title='Sản phẩm mới'/>},
    {key:'collection',component:<Collection data={collectionData}/>},
    {key:'recomendProducts',component:<ProductSection products={products} title='Gợi ý cho bạn'/>}

  ]


  return (
   <FlatList
    data={sections}
    keyExtractor={(item)=>item.key}
    renderItem={({item})=><View style={styles.componentContainer}>{item.component}</View>}
    />
  )
}

export default Nam

const styles = StyleSheet.create({
  componentContainer:{
    marginBottom:8
  }

})