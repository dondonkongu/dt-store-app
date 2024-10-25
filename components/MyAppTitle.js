import { View, Text } from 'react-native'
import React from 'react'

const MyAppTitle = ({children}) => {
  return (
    <MyAppTitle>
      <Text style={{ fontSize: 20,color:'#fff', fontWeight:'semibold' }}>{children}</Text>
    </MyAppTitle>
  )
}

export default MyAppTitle