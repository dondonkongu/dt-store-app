import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const SecondButton = ({title,width,height,onPress}) => {
  return (
   <TouchableOpacity style={[styles.button,{width,height}]} onPress={onPress} >
        <Text style={styles.text}>{title}</Text>
   </TouchableOpacity>
  )
}

export default SecondButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    text:{
        fontSize:17,
        fontWeight:'semibold',
        color:'white'
    }

})