import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwipperCategories from '../../components/SwipperCategories'
import SwipperBanner from '../../components/SwipperBanner';


const categories = [
  { id: '1', name: 'Áo thun',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/247f5276-51d5-407b-821d-4efd30b8435b.png' },
  { id: '2', name: 'Áo Polo',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/f2e21cbb-cc42-451b-9726-a44f01c376ff.png' },
  { id: '3', name: 'Áo sơ mi',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/52a1a466-6895-4e0a-a3b5-22ccb97f4680.png' },
  { id: '4', name: 'Áo khoác',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/ddf917e2-f8a9-4b1b-9781-e19328af0f69.png' },
  { id: '5', name: 'Váy đầm',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/d083eb5e-0b3f-4138-8676-007768eae0ea.png' },
  { id: '6', name: 'Chân váy',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/909fa1d0-6b99-4747-857e-d5e18c3270ad.png' },
  { id: '7', name: 'Áo kiểu',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/f6c00282-fd0f-47c0-a376-4a1fa9896152.png' },
  { id: '8', name: 'Quần short',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/342843e8-9b96-486c-a45b-55884d0fcd92.png' },
  { id: '9', name: 'Quần Jean',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/3bbb07ba-875a-4e73-978d-b1ad0df666c9.png' },
  { id: '10', name: 'Quần Kaki',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/c2838748-5038-4b3f-95f3-7e262a2e7b36.png' },
  { id: '11', name: 'Quần tây',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/75c4fe5f-e6ea-4a12-91a2-f26afaea6ef8.png'  },
  { id: '12', name: 'Đồ bộ',img:'https://media-fmplus.cdn.vccloud.vn/uploads/categories/e87112ef-d67c-4fe3-9c28-f40b95a57e62.png' },
];
const imgBanner =[
  {id:1,link:'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/77e75b25-c6be-48a3-ba31-c426ed66d60a.jpg'}
  ,{id:2,link:'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/e583ad3d-3c98-4cc4-b12b-0023fb0c5b58.jpg'}
  ,{id:3,link:'https://media-fmplus.cdn.vccloud.vn/uploads/sliders/1ef014db-3c0e-4f6a-bd37-9af9ed13d834.jpg'}    
]

const Dt = () => {
  return (
    <View style={{ backgroundColor:'#fff',flex:1 }}>
      <View style={{ height:200 }}>
        <SwipperBanner data={imgBanner}/>
        </View>
      <View style={{ height:230 }}>
        <SwipperCategories data={categories}/>
      </View>
       
    </View>
  )
}

export default Dt

const styles = StyleSheet.create({})