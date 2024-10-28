import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwipperCategories from '../../components/SwipperCategories'

const Dt = () => {
  return (
    <View style={{ backgroundColor:'#fff', flex:1,justifyContent:'center',alignItems:'center' }}>
        <SwipperCategories/>
    </View>
  )
}

export default Dt

const styles = StyleSheet.create({})