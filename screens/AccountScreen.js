import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { MAINCOLOR } from '../constants/color';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import SecondButton from '../components/SecondButton';
import AuthContext from '../context/AuthContext';
import { getToken } from '../service/asyncStorageService';
import { useState } from 'react';
import BASE_URL from '../api';

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
      console.log(response.data.result);
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

return (
  <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Tài khoản</Text>
      </View>

      {isLoggedIn ? (
          <View>
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
  </SafeAreaView>
);

};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

});
