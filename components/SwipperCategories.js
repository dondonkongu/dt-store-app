import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const SwipperCategories = () => {
  // Dữ liệu danh mục
  const categories = [
    { id: '1', name: 'Áo thun' },
    { id: '2', name: 'Áo Polo' },
    { id: '3', name: 'Áo sơ mi' },
    { id: '4', name: 'Áo khoác' },
    { id: '5', name: 'Váy đầm' },
    { id: '6', name: 'Chân váy' },
    { id: '7', name: 'Áo kiểu' },
    { id: '8', name: 'Quần short' },
    { id: '9', name: 'Quần Jean' },
    { id: '10', name: 'Quần Kaki' },
    { id: '11', name: 'Quần tây' },
    { id: '12', name: 'Đồ bộ' },
  ];

  // Tạo 2 nhóm danh mục, mỗi nhóm chứa 6 item
  const categoriesGroups = [
    categories.slice(0, 6), // Nhóm đầu tiên: item 1 đến 6
    categories.slice(6, 12) // Nhóm thứ hai: item 7 đến 12
  ];

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}                // Hiển thị nút chuyển tiếp và quay lại
      autoplay={false}                    // Tự động chuyển slide
      dotColor="#ccc"                    // Màu cho các chấm không được chọn
      activeDotColor="#ff6347"           // Màu cho chấm được chọn
      loop={true}                         // Vòng lặp khi đến slide cuối
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        <FlatList
          data={categoriesGroups[0]} 
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={3} // Sử dụng 3 cột
          scrollEnabled={false} // Tắt cuộn cho FlatList
        />
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <FlatList
          data={categoriesGroups[1]} // Lấy nhóm thứ hai
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={3} // Sử dụng 3 cột
          scrollEnabled={false} // Tắt cuộn cho FlatList
        />
      </View>
    </Swiper>
  );
};

export default SwipperCategories;

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  categoryItem: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 5, // Khoảng cách giữa các item
    borderRadius: 10,
    elevation: 3,  // Tạo hiệu ứng bóng cho item
    flex: 1,
    alignItems: 'center', // Căn giữa chữ trong item
  },
  text: {
    color: '#000',   // Đổi màu chữ cho rõ ràng
    fontSize: 16,
    fontWeight: 'bold',
  },
});
