import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({title,width,height,onPress}) => {
  return (
   <TouchableOpacity style={[styles.button,{width,height}]} onPress={onPress} >
        <Text style={styles.text}>{title}</Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#CC3333',
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