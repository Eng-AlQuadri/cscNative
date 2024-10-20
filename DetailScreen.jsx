// DetailScreen.js
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function DetailScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('./mocha.png')} style={styles.image} />
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.productName}>Caffe Mocha</Text>
          <Text style={styles.subName}>Ice/Hot</Text>
          <Text style={styles.rating}>⭐ 4.8 (230)</Text>
        </View>
        <View style={styles.innerSizeContent}>
          <TouchableOpacity style={styles.innerSizeButton}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerSizeButton}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerSizeButton}>
            <Text>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
        espresso coffee and 85 ml of milk foam.
      </Text>
      <Text style={styles.descriptionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        <TouchableOpacity style={styles.sizeButton}>
          <Text style={{textAlign: 'center'}}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeButton}>
          <Text style={{textAlign: 'center'}}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sizeButton}>
          <Text style={{textAlign: 'center'}}>L</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buyContainer}>
        <View>
          <Text style={styles.price}>Price</Text>
          <Text style={styles.pval}>$4.53</Text>
        </View>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('OrderScreen')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  image: {width: '100%', height: 200, borderRadius: 8},
  productName: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
    lineHeight: 30,
    color: 'black',
  },
  pval: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
    lineHeight: 30,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
    color: '#C67C4E',
  },
  rating: {fontSize: 14, color: '#888'},
  description: {fontSize: 16, color: '#666', marginVertical: 16},
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    width: 320,
    height: 41,
    gap: 16,
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    width: 96,
    height: 41,
    // padding: 24,
    gap: 10,
    borderColor: '#E3E3E3',
  },
  buyButton: {
    backgroundColor: '#C67C4E',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    width: 217,
    height: 56,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 16,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subName: {
    margin: 0,
    bottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  buyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  innerSizeContent: {
    flexDirection: 'row',
    width: 156,
    height: 44,
    gap: 12,
  },
  innerSizeButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  descriptionTitle: {
    width: 98,
    height: 24,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#242424',
    marginTop: 15,
  },
  price: {
    top: 15,
    fontSize: 14,
  },
});
