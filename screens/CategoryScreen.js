import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Collection from '../components/Collection'

const CategoryScreen = () => {
  return (
    <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
      {/* <Text>CategoryScreen</Text> */}
      <Collection />
    

    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})