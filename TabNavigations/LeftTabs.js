import { Dimensions } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NamCategories from '../screens/Categories/NamCategories'
import NuCategories from '../screens/Categories/NuCategories'

const Tab = createMaterialTopTabNavigator();

const LeftTabs = () => {
  return (
    <Tab.Navigator
    tabBarScrollEnabled={true}
    screenOptions={{ headerShown:false ,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle:{width: Dimensions.get('window').width/2, height: 40,padding:0,margin:0,},
        tabBarStyle: { backgroundColor: '#f0f0f0' },
        tabBarIndicatorStyle: { backgroundColor: '#cc3333' },
        tabBarActiveTintColor: '#cc3333',
        tabBarInactiveTintColor: '#000',
        
    }} 
    >
        <Tab.Screen name='Nam' component={NamCategories} />
        <Tab.Screen name='Nữ' component={NuCategories} />
    </Tab.Navigator>
  )
}

export default LeftTabs