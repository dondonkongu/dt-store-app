import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Nhấn vào đây" width={200} height={50} />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})