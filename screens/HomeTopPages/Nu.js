import {  StyleSheet,  View , Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import BASE_URL from '../../api'
import SwipperCategories from '../../components/SwipperCategories'
import ProductSection from '../../components/ProductSection'
import Collection from '../../components/Collection'

const Nu = ({}) => {
  const categories =[
    { id: 14, name: 'Áo thun',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/247f5276-51d5-407b-821d-4efd30b8435b.png' },
    { id: 15, name: 'Áo Polo',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/f2e21cbb-cc42-451b-9726-a44f01c376ff.png' },
    { id: 16, name: 'Áo sơ mi',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/52a1a466-6895-4e0a-a3b5-22ccb97f4680.png' },
    { id: 17, name: 'Áo kiểu', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/f6c00282-fd0f-47c0-a376-4a1fa9896152.png' },
    { id: 7 , name: 'Đồ bộ', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/e87112ef-d67c-4fe3-9c28-f40b95a57e62.png' },
    { id: 3, name: 'Váy đầm', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/d083eb5e-0b3f-4138-8676-007768eae0ea.png' },
    { id: 18, name: 'Chân váy', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/909fa1d0-6b99-4747-857e-d5e18c3270ad.png' },
    { id: 19, name: 'Quần short', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/342843e8-9b96-486c-a45b-55884d0fcd92.png' },
    { id: 20, name: 'Quần Jean', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/3bbb07ba-875a-4e73-978d-b1ad0df666c9.png' },
    { id: 21, name: 'Quần tây', img: 'https://media-fmplus.cdn.vccloud.vn/uploads/categories/75c4fe5f-e6ea-4a12-91a2-f26afaea6ef8.png' }, 
    { id: 22, name: 'Áo khoác',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/ddf917e2-f8a9-4b1b-9781-e19328af0f69.png' },
  ]

  const [products, setProducts]= useState([])
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
    fetchProducst()
    fetchCollection()
  }, [])

  const fetchProducst =async()=>{
     await BASE_URL.get('/dt-store/products/subcategory/2')
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
      source={require('../../assets/banner-nu.jpg')}
      style={{ width: '100%', height: 200 }}
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

export default Nu

const styles = StyleSheet.create({
  componentContainer:{
    marginBottom:8
  }

})