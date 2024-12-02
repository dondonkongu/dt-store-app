import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BASE_URL from '../../api';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const NuCategories = () => {

    const navigation = useNavigation();
    const categories = [
      { id: 14, name: 'Áo thun' },
      { id: 15, name: 'Áo Polo' },
      { id: 16, name: 'Áo sơ mi' },
      { id: 17, name: 'Áo kiểu' },
      { id: 7, name: 'Đồ bộ' },
      { id: 3, name: 'Váy đầm' },
      { id: 18, name: 'Chân váy' },
      { id: 19, name: 'Quần short' },
      { id: 20, name: 'Quần Jean' },
      { id: 21, name: 'Quần tây' },
      { id: 22, name: 'Áo khoác' },
    ];
    

    const handleSelectCategory = async (id) => {
        try {
          const fetchProducts = await BASE_URL.get(`/dt-store/products/category/${id}`);          
          navigation.navigate('ProductFilter', { products: fetchProducts.data.result });
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.categoryItem} onPress={()=>handleSelectCategory(item.id)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text>{item.name}</Text>
                        <Ionicons name="arrow-forward" size={18} color="#ccc" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NuCategories

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        elevation: 5,
    },

})