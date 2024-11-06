import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'

const MenuItem = ({icon,title}) => {
  return (
    <View style={{backgroundColor:'#fff', borderBottomWidth:1, borderColor:'#ccc'}} >
        <View  style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', padding:20 }}>
            <View style={{ flexDirection:'row',gap:10,paddingHorizontal:10,justifyContent:'center', alignItems:'center' }}>
                 <Ionicons name={icon} size={25} color='#000' />
            <Text style={{ fontSize:15 }}>{title}</Text>
            </View>
        <Ionicons name='chevron-forward' size={20} color='#000' />
        </View>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})