import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Line = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc', 
  },
  text: {
    marginHorizontal: 10,
    fontSize: 13,
    color: '#555',
  },
});

export default Line;
