import { SafeAreaView, StyleSheet,Text,  View } from 'react-native'
import React from 'react'

import LeftTabs from '../TabNavigations/LeftTabs'
import { MAINCOLOR } from '../constants/color'

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Danh Mục</Text>
      </View>
      <LeftTabs />
      </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: MAINCOLOR,
    width: '100%',
    paddingHorizontal: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})