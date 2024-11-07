import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SizeChart = () => {
  return (
    <View style={styles.container}>
      <View>
        
        <Text style={styles.title}>Bảng thông số chung</Text>

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerCell}>Kích cỡ</Text>
            <Text style={styles.headerCell}>Tôi</Text>
            <Text style={styles.headerCell}>L</Text>
            <Text style={styles.headerCell}>XL</Text>
            <Text style={styles.headerCell}>2XL</Text>
            <Text style={styles.headerCell}>3XL</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cell}>Chiều cao (cm)</Text>
            <Text style={styles.cell}>{'<165'}</Text>
            <Text style={styles.cell}>165 - 170</Text>
            <Text style={styles.cell}>168 - 173</Text>
            <Text style={styles.cell}>170 - 176</Text>
            <Text style={styles.cell}>170 - 176</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell}>Cân nặng (kg)</Text>
            <Text style={styles.cell}>60</Text>
            <Text style={styles.cell}>60 - 64</Text>
            <Text style={styles.cell}>64 - 69</Text>
            <Text style={styles.cell}>68 - 72</Text>
            <Text style={styles.cell}>70 - 74</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell}>Vòng ngực</Text>
            <Text style={styles.cell}>86 - 90</Text>
            <Text style={styles.cell}>90 - 94</Text>
            <Text style={styles.cell}>94 - 98</Text>
            <Text style={styles.cell}>98 - 102</Text>
            <Text style={styles.cell}>102 - 104</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell}>Vòng eo</Text>
            <Text style={styles.cell}>68 - 72</Text>
            <Text style={styles.cell}>72 - 76</Text>
            <Text style={styles.cell}>76 - 80</Text>
            <Text style={styles.cell}>80 - 84</Text>
            <Text style={styles.cell}>84 - 86</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell}>Vòng mông</Text>
            <Text style={styles.cell}>88 - 92</Text>
            <Text style={styles.cell}>92 - 96</Text>
            <Text style={styles.cell}>96 - 100</Text>
            <Text style={styles.cell}>100 - 104</Text>
            <Text style={styles.cell}>104 - 108</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    flex: 1,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  cell: {
    flex: 1,
    fontSize:13,
    padding: 8,
    textAlign: 'center',
  },
});
