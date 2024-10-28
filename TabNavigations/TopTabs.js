import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Dt from '../screens/HomeTopPages/Dt'
import Nam from '../screens/HomeTopPages/Nam'
import Nu from '../screens/HomeTopPages/Nu'
import BoSuuTap from '../screens/HomeTopPages/BoSuuTap'
import DoDoi from '../screens/HomeTopPages/DoDoi'
import MuBaoHiem from '../screens/HomeTopPages/MuBaoHiem'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
    tabBarScrollEnabled={true}
    screenOptions={{ headerShown:false ,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle:{width: Dimensions.get('window').width/6, height: 40,padding:0,margin:0,},
        tabBarStyle: { backgroundColor: '#f0f0f0' },
        tabBarIndicatorStyle: { backgroundColor: '#cc3333' },
        tabBarActiveTintColor: '#cc3333',
        tabBarInactiveTintColor: '#000',
    }} 
    >
        <Tab.Screen name='DT' component={Dt} />
        <Tab.Screen name='Nam' component={Nam} />
        <Tab.Screen name='Nữ' component={Nu} />
        <Tab.Screen name='Đồ đôi' component={DoDoi} />
        <Tab.Screen name='Bộ sưu tập' component={BoSuuTap} />
        <Tab.Screen name='Mũ bảo hiểm' component={MuBaoHiem} />
    </Tab.Navigator>
  )
}

export default TopTabs