import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BASE_URL from '../../api';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NamCategories = () => {

    const navigation = useNavigation();
    const categories = [
        { id: 8, name: 'Áo thun' },
        { id: 9, name: 'Áo Polo' },
        { id: 10, name: 'Áo sơ mi' },
        { id: 11, name: 'Áo khoác' },
        { id: 12, name: 'Quần short' },
        { id: 13, name: 'Quần Kaki' },
    ]

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

export default NamCategories

const styles = StyleSheet.create({
    categoryItem: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        elevation: 5,
    },

})