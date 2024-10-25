import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CategoryScreen from '../screens/CategoryScreen'
import NewsScreen from '../screens/NewsScreen'
import DMeScreen from '../screens/DMeScreen'
import AccountScreen from '../screens/AccountScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
   <Tab.Navigator
   screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Trang chủ') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'Danh mục') {
        iconName = focused ? 'grid' : 'grid-outline';
      }
      else if (route.name === 'Tin tức') {
        iconName = focused ? 'newspaper' : 'newspaper-outline';
      }
      else if (route.name === 'D-Me') {
        iconName = focused ? 'camera' : 'camera-outline';
      }
      else if (route.name === 'Tài khoản') {
        iconName = focused ? 'person-circle' : 'person-circle-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#CC3333',
    tabBarInactiveTintColor: 'gray',
  })}
   >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Danh mục" component={CategoryScreen} />
        <Tab.Screen name="Tin tức" component={NewsScreen} />
        <Tab.Screen name="D-Me" component={DMeScreen} />
        <Tab.Screen name="Tài khoản" component={AccountScreen} />

        
   </Tab.Navigator>
  )
}

export default BottomTabs

