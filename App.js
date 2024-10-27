import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
        <Text style={styles.price}>141.800 đ</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Sửa</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.discountContainer}>
        <TextInput 
          style={styles.discountInput}
          placeholder="Mã giảm giá"
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.loginPrompt}>
        Bạn có phiếu quà tặng TikiCoin? Nhập tại đây?
      </Text>
      
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Tạm tính</Text>
        <Text style={styles.totalPrice}>141.800 đ</Text>
      </View>
      
      <View style={styles.finalTotalContainer}>
        <Text style={styles.finalTotalLabel}>Thành tiền</Text>
        <Text style={styles.finalTotalPrice}>141.800 đ</Text>
      </View>
      
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  supplier: {
    color: 'gray',
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
  },
  editButton: {
    padding: 5,
  },
  editButtonText: {
    color: 'blue',
  },
  discountContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  discountInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  applyButton: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  applyButtonText: {
    fontWeight: 'bold',
  },
  loginPrompt: {
    color: 'blue',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  finalTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  finalTotalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  finalTotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  orderButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CheckoutScreen;