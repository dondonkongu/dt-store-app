import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../constants/color';
import TopTabs from '../TabNavigations/TopTabs';


const HomeScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.inputSearch}>
            <Ionicons name='search' size={24} color='#000' />
            <TextInput style={styles.searchText}
              placeholder='Tìm kiếm' />
          </View>
          <View style={styles.icon}>
            <Ionicons name='notifications-outline' size={26} color='#fff' />
            <Ionicons name='cart-outline' size={26} color='#fff' />
          </View>
        </View>
      </View>
        <TopTabs/>

    </SafeAreaView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: MAINCOLOR,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  inputSearch: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    flex: 1,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    justifyContent: 'space-between',
  },

})