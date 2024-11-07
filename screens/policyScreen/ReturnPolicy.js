import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../../constants/color';

const ReturnPolicy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Chính sách bảo hành và đổi trả</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>I. Chính sách bảo hành</Text>
        
        <Text style={styles.subSection}>1. Thời gian bảo hành:</Text>
        <Text style={styles.text}>
          - Sản phẩm được bảo hành trong vòng 12 tháng kể từ ngày mua, áp dụng với lỗi kỹ thuật từ nhà sản xuất.
        </Text>

        <Text style={styles.subSection}>2. Điều kiện bảo hành:</Text>
        <Text style={styles.text}>
          - Sản phẩm được bảo hành nếu có đầy đủ hóa đơn mua hàng.{'\n'}
          - Sản phẩm phải còn nguyên vẹn, không bị hư hỏng do người dùng (vỡ, nứt, cháy nổ do sử dụng sai cách, v.v.).
        </Text>

        <Text style={styles.subSection}>3. Quy trình bảo hành:</Text>
        <Text style={styles.text}>
          - Khách hàng mang sản phẩm cùng hóa đơn đến điểm bảo hành hoặc liên hệ qua hotline để được hỗ trợ.
        </Text>

        <Text style={styles.sectionHeader}>II. Chính sách đổi trả</Text>
        
        <Text style={styles.subSection}>1. Điều kiện đổi trả:</Text>
        <Text style={styles.text}>
          - Sản phẩm đổi trả phải trong vòng 7 ngày kể từ ngày nhận hàng.{'\n'}
          - Sản phẩm còn nguyên bao bì, tem nhãn và chưa qua sử dụng.
        </Text>

        <Text style={styles.subSection}>2. Quy trình đổi trả:</Text>
        <Text style={styles.text}>
          - Khách hàng liên hệ với bộ phận chăm sóc khách hàng để xác nhận yêu cầu đổi trả.{'\n'}
          - Sau khi xác nhận, khách hàng gửi sản phẩm đến địa chỉ được cung cấp và sẽ nhận được sản phẩm thay thế hoặc hoàn tiền trong vòng 7 ngày làm việc.
        </Text>

        <Text style={styles.note}>
          *Lưu ý:{'\n'}
          - Các sản phẩm trong chương trình khuyến mãi sẽ không áp dụng chính sách đổi trả.{'\n'}
          - Chúng tôi không chịu trách nhiệm với các sản phẩm hư hỏng do lỗi từ phía người dùng.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReturnPolicy;

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
    marginBottom: 5,
  },
  note: {
    fontSize: 14,
    lineHeight: 20,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
  },
});
