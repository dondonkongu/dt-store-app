import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { MAINCOLOR } from '../constants/color';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import SecondButton from '../components/SecondButton';
import AuthContext from '../context/AuthContext';
import { getToken } from '../service/asyncStorageService';
import { useState } from 'react';
import BASE_URL from '../api';
import MenuItem from '../components/MenuItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountScreen = () => {
  const nav = useNavigation();
  const {isLoggedIn,logout} = useContext(AuthContext)
  const [user, setUser] = useState({});


  const getUserDetail = async (accessToken) => { 
    try {
      const response = await BASE_URL.get('identity/users/my-info', {
          headers: {
              Authorization: `Bearer ${accessToken}`, 
          }
      });
      setUser(response.data.result);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.result));
      console.log('User data saved to AsyncStorage:', response.data.result);
  } catch (error) {
    console.error("Error fetching data: ", error.response ? error.response.data : error.message);
  }
  }

  useEffect(() => {
    const fetchUserData = async () => {
        const accessToken = await getToken(); 
        if (accessToken) {
            await getUserDetail(accessToken);
        }
    };

    fetchUserData(); 
}, [isLoggedIn]);

const handleLogout = () => {
  logout()
  setUser({})
  nav.navigate('Login')
}
const menuItems=[
  {icons:'headset-outline',title:'Trung tâm trợ giúp'},
  {icons:'heart-outline',title:'Sản phẩm đã thích'},
  {icons:'eye-outline',title:'Sản phẩm đã xem'},
  {icons:'star-outline',title:'Đánh giá của tôi'},
  {icons:'share-social-outline',title:'Giới thiệu bạn bè'},
  {icons:'location-outline',title:'Hệ thống cửa hàng'},
  {icons:'information-circle-outline',title:'Về chúng tôi'},

]
const userMenu=[
  {icons:'reader-outline',title:'Thông tin cá nhân'},
  {icons:'settings-outline',title:'Cài đặt'},
]

return (
  <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Tài khoản</Text>
      </View>
      
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoggedIn ? (
          <View style={styles.authenticate}>
              <Text>{user.username}</Text>
              <Button
                  title="Đăng xuất"
                  width={120}
                  height={40}
                  onPress={handleLogout}
              />
          </View>
      ) : (
          <View style={styles.authenticate}>
              <View>
                  <SecondButton
                      title="Đăng nhập"
                      width={120}
                      height={40}
                      onPress={() => nav.navigate('Login')}
                  />
              </View>
              <View>
                  <Button
                      title="Đăng ký"
                      width={120}
                      height={40}
                      onPress={() => nav.navigate('Register')}
                  />
              </View>
          </View>
      )}
      <View style={styles.box}>
          <MenuItem icon='cart-outline' title='Tra cứu đơn hàng' />
      </View>
      <View style={styles.box}>
          {menuItems.map((item,index)=>(
            <MenuItem key={index} icon={item.icons} title={item.title} />
          ))}
      </View>
      <View style={styles.box}>
          {userMenu.map((item,index)=>(
            <MenuItem key={index} icon={item.icons} title={item.title} />
          ))}
      </View>
      </ScrollView>

  </SafeAreaView>
);

};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
  header: {
    backgroundColor: MAINCOLOR,
    width: '100%',
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  authenticate: {
    backgroundColor: 'white',
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth:0.5,
    borderColor:'#ccc'
  },
  box:{
    backgroundColor: 'white',
    marginTop:10,
    borderBottomWidth:0.5,
    borderColor:'#ccc'
  }

});
