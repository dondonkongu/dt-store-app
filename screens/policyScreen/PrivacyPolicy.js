import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MAINCOLOR } from '../../constants/color';

const PrivacyPolicy = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Chính sách bảo mật</Text>
        <View style={{ width: 26 }} /> 
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeader}>I. Chính Sách Bảo Mật Thông Tin Khách Hàng</Text>
        
        <Text style={styles.subSection}>1. Mục đích thu thập thông tin cá nhân</Text>
        <Text style={styles.text}>
          - Việc thu thập dữ liệu trên ứng dụng bao gồm: email, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ khách hàng (thành viên).{'\n'}
          - Các thành viên tự chịu trách nhiệm bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử.
        </Text>

        <Text style={styles.subSection}>2. Phạm vi thu thập thông tin</Text>
        <Text style={styles.text}>
          - Cung cấp các dịch vụ đến thành viên;{'\n'}
          - Gửi thông báo về các hoạt động trao đổi thông tin giữa thành viên và DT Store;{'\n'}
          - Ngăn ngừa các hoạt động phá hủy tài khoản người dùng hoặc giả mạo;{'\n'}
          - Liên hệ và giải quyết với thành viên trong trường hợp đặc biệt.
        </Text>

        <Text style={styles.subSection}>3. Thời gian lưu trữ thông tin</Text>
        <Text style={styles.text}>
          - Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc thành viên tự đăng nhập để hủy bỏ.
        </Text>

        <Text style={styles.subSection}>4. Những người hoặc tổ chức có thể tiếp cận với thông tin</Text>
        <Text style={styles.text}>
          - Đối tác cung cấp dịch vụ liên quan đến thực hiện đơn hàng, với các quy định đảm bảo an ninh thông tin.{'\n'}
          - Bên thứ ba thực hiện các hoạt động liên quan đến website hoặc ứng dụng DT Store Các bên này phải tuân thủ các luật lệ bảo vệ thông tin.{'\n'}
          - Các chương trình có tính liên kết hoặc đồng thực hiện cho các mục đích được nêu tại Mục 1.{'\n'}
          - Yêu cầu pháp lý từ cơ quan tư pháp trong trường hợp liên quan đến hành vi vi phạm pháp luật của khách hàng.
        </Text>

        <Text style={styles.subSection}>5. Địa chỉ của đơn vị thu thập và quản lý thông tin</Text>
        <Text style={styles.text}>
          Tên doanh nghiệp: CÔNG TY TNHH MTV DT STORE{'\n'}
          - Trụ sở chính: 100 Nguyên Thức Tự, Quận Ngũ Hành Sơn, Đà Nẵng{'\n'}
          - Điện thoại: 0349 932 314{'\n'}
          - Email: obitanz123@gmail.com
        </Text>

        <Text style={styles.subSection}>6. Phương thức và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu</Text>
        <Text style={styles.text}>
          - Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin.{'\n'}
          - Thành viên có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ 3 đến Ban quản trị của Dt Store.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

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
});
