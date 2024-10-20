// OrderScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

export default function OrderScreen() {
  const [quantity, setQuantity] = useState(2);

  // Function to handle quantity increment and decrement
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Delivery / Pickup Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Pick Up</Text>
        </TouchableOpacity>
      </View>

      {/* Delivery Address */}
      <View style={styles.addressContainer}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <Text style={styles.address}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressDetails}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
        <View style={styles.addressButtons}>
          <Pressable style={styles.addressButton}>
            <Text style={{textAlign: 'center'}}>Edit Address</Text>
          </Pressable>
          <Pressable style={styles.addressButton}>
            <Text style={{textAlign: 'center'}}>Add Note</Text>
          </Pressable>
        </View>
      </View>

      {/* Product Section */}
      <View style={styles.productContainer}>
        <Image source={require('./mocha.png')} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Caffe Mocha</Text>
          <Text style={styles.productDesc}>Deep Foam</Text>
        </View>
        <View style={styles.quantityControl}>
          <Pressable onPress={decrement} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>{quantity}</Text>
          <Pressable onPress={increment} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Discount Section */}
      <TouchableOpacity style={styles.discountContainer}>
        <Text>1 Discount is Applied</Text>
      </TouchableOpacity>

      {/* Payment Summary */}
      <View style={styles.paymentSummary}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.summaryRow}>
          <Text>Price</Text>
          <Text>$ 4.53</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery Fee</Text>
          <Text style={styles.strikedText}>$ 2.0</Text>
          <Text>$ 1.0</Text>
        </View>
      </View>

      {/* Payment Method */}
      <TouchableOpacity style={styles.paymentMethod}>
        <Text>Cash/Wallet</Text>
        <Text style={styles.walletAmount}>$ 5.53</Text>
      </TouchableOpacity>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    backgroundColor: '#EEE',
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    backgroundColor: '#C86E44',
    borderRadius: 8,
  },
  tabText: {
    color: '#888',
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  addressContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 24,
    width: 140,
    height: 24,
    color: '#242424',
  },
  address: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressDetails: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  addressButtons: {
    flexDirection: 'row',
    marginTop: 8,
    width: 229,
    height: 36,
    gap: 8,
  },
  addressButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    marginRight: 8,
    width: 120,
    height: 36,
    paddingTop: 6,
    borderColor: '#A2A2A2',
    paddingBottom: 6,
    paddingRight: 12,
    paddingLeft: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDesc: {
    fontSize: 14,
    color: '#888',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    height: 24,
    gap: 10,
  },
  quantityButton: {
    backgroundColor: '#EEE',
    marginHorizontal: 4,
    width: 24,
    height: 24,
    borderRadius: 20,
    gap: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  discountContainer: {
    backgroundColor: '#EDEDED59',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    width: 327,
    height: 56,
    gap: 90,
  },
  paymentSummary: {
    marginBottom: 16,
    backgroundColor: '#EDEDED59',
    padding: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  strikedText: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 8,
  },
  paymentMethod: {
    backgroundColor: '#EDEDED59',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  walletAmount: {
    fontWeight: 'bold',
    color: '#C86E44',
  },
  orderButton: {
    backgroundColor: '#C86E44',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
