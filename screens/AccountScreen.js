import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import { MAINCOLOR } from '../constants/color';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tài khoản</Text>
      </View>
      <View style={styles.authenticate}>
        <View >       
           <Button title="Đăng nhập" width={120} height={40} onPress={()=>nav.navigate('Login')}  />
        </View>
        <View>
          <Button title="Đăng ký" width={120} height={40} onPress={()=>nav.navigate('Register')} />
        </View>
      </View>
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
