import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity,SafeAreaView ,Image} from 'react-native';
import { useCart } from '../context/CartContext';
import { MAINCOLOR } from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>Giá: {item.price} VND</Text>
        <Text>Số lượng: {item.quantity}</Text>
        <Text>
          Màu: {item.selectedVariant.color}  
        </Text>
        <Text>
          Size: {item.selectedVariant.size}
        </Text>
      </View>

      <View style={styles.actions}>
        <Button
          title="+"
          onPress={() => updateQuantity(item.id, item.quantity + 1)}
        />
        <Button
          title="-"
          onPress={() => {
            if (item.quantity > 1) {
              updateQuantity(item.id, item.quantity - 1);
            } else {
              removeFromCart(item.id);
            }
          }}
        />
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
      <Text style={styles.headerText}>Giỏ hàng của bạn</Text>
      <View style={{ width: 26 }} />
    </View>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Giỏ hàng trống</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
      {cartItems.length > 0 && (
        <Button
          title="Tiến hành thanh toán"
          onPress={() => navigation.navigate('CartCheckOut')}
          style={styles.checkoutButton}
        />
      )}
    </SafeAreaView>
  );
};

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
  

  emptyCartText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  itemDetails: {
    flex: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  removeButton: {
    marginTop: 5,
    backgroundColor: '#ff6666',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  checkoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    color: '#fff',
  },
});

export default CartScreen;
