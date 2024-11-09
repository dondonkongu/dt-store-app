import { StyleSheet, Text, View, } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyAppTitle = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
      <Text style={styles.headerText}>{title}</Text>
      <View style={{ width: 26 }} /> 
    </View>
  )
}

export default MyAppTitle

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#cc3333",
    width: '100%',
    paddingHorizontal: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
})