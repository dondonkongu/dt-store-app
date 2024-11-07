import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../../constants/color';

const ShippingPolicy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Chính sách vận chuyển</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>I. Chính sách vận chuyển</Text>

        <Text style={styles.subSection}>1. Phương thức vận chuyển:</Text>
        <Text style={styles.text}>- Giao hàng qua GHTK</Text>

        <Text style={styles.subSection}>2. Phạm vi áp dụng:</Text>
        <Text style={styles.text}>
          - Đối với khách hàng trong quận nội thành Đà Nẵng: 15.000 vnđ{'\n'}
          - Đối với khách hàng ngoại tỉnh: 30.000đ (&lt;500gr), 35.000đ (500g đến 1000gr){'\n'}
          - Đối với khách hàng thuộc khu vực biển đảo: 50.000đ
        </Text>

        <Text style={styles.subSection}>3. Thời gian giao hàng:</Text>
        <Text style={styles.text}>
          3.1. Đối với khách hàng thuộc các quận nội thành Đà Nẵng (Hải Châu, Thanh Khê): giao hàng trong 1 ngày vào buổi chiều tối mỗi ngày (trừ ngày Chủ nhật).{'\n'}
          3.2. Đối với khách hàng thuộc TP Hồ Chí Minh, Hà Nội, Hải Phòng, Cần Thơ, Bình Dương: thời gian giao hàng từ 1 - 3 ngày.{'\n'}
          3.3. Đối với khách hàng thuộc các tỉnh khác: thời gian giao hàng từ 4 - 7 ngày.
        </Text>

        <Text style={styles.note}>
          *Lưu ý:{'\n'}
          - Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán hoàn tất của khách hàng.{'\n'}
          - Có thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu hoặc DT Store chủ động thay đổi trong trường hợp chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác.{'\n'}
          - Ưu đãi freeship chỉ áp dụng với đơn hàng nguyên giá (không giảm giá).
        </Text>

        <Text style={styles.sectionHeader}>II. Hình thức thanh toán:</Text>
        <Text style={styles.subSection}>1. Thanh toán bằng hình thức COD:</Text>
        <Text style={styles.text}>- Thanh toán khi nhận hàng.</Text>

        <Text style={styles.subSection}>2. Thanh toán bằng hình thức chuyển khoản:</Text>
        <Text style={styles.text}>
          - Tên chủ tài khoản: Nguyễn Thành Đôn{'\n'}
          - Ngân hàng MBbank{'\n'}
          - Số tài khoản: 0345932314
        </Text>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingPolicy;

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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  subSection: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#666',
    marginBottom: 20,
  },
  note: {
    fontSize: 14,
    lineHeight: 20,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
  },
});
