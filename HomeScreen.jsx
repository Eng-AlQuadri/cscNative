// HomeScreen.js
import React from 'react';
import {TextInput} from 'react-native';
import {Pressable} from 'react-native';
import {ImageBackground} from 'react-native';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
  {id: '6', title: 'Item 6'},
];

const GridView = () => {
  // Render each item
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fLocationText}>Location</Text>
        <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Search Coffee" />
          <Pressable style={styles.verifyButton}>
            <Text style={styles.buttonText}>Search</Text>
          </Pressable>
        </View>
      </View>

      <ImageBackground
        source={require('./Banner.png')}
        style={styles.promoContainer}
        resizeMode="cover"
        borderRadius={6}>
        <View>
          <Text style={styles.promoText}>Buy one get</Text>
          <Text style={styles.promoText}>one FREE</Text>
        </View>
      </ImageBackground>

      {/* Category Tabs */}
      <View style={styles.categoryTabs}>
        <Text style={styles.activeTab}>All Coffee</Text>
        <Text style={styles.tab}>Macchiato</Text>
        <Text style={styles.tab}>Latte</Text>
        <Text style={styles.tab}>Americano</Text>
      </View>

      <View style={styles.productContainer}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('DetailScreen')}>
          <Image source={require('./mocha.png')} style={styles.productImage} />
          <Text style={styles.productName}>Caffe Mocha</Text>
          <Text style={styles.productPrice}>$4.53</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('DetailScreen')}>
          <Image
            source={require('./flatwhite.png')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Flat White</Text>
          <Text style={styles.productPrice}>$3.53</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  locationText: {
    fontSize: 16,
    color: 'white',
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  fLocationText: {fontSize: 14, color: '#888', marginTop: 16, marginBottom: 8},
  promoContainer: {
    backgroundColor: '#FEE',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    bottom: 80,
    height: 140,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    zIndex: 2,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 32,
  },
  promoImage: {width: '100%', height: 120, borderRadius: 8},
  productContainer: {
    backgroundColor: '#EDEDED59',
    flex: 2,
    padding: 16,
    borderRadius: 0,
    marginHorizontal: -16,
    bottom: 70,
    flexDirection: 'row',
  },
  productImage: {width: 140, height: 128, borderRadius: 12},
  productName: {fontSize: 16, fontWeight: '600', marginTop: 8},
  productPrice: {fontSize: 14, color: '#888'},
  header: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 0,
    marginHorizontal: -16,
    marginBottom: 16,
    height: 280,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  verifyButton: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  box: {
    flex: 1,
    width: 156,
    height: 238,
    borderRadius: 16,
    borderColor: 'white',
    backgroundColor: '#FFFFFF',
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 12,
    gap: 16,
    margin: 4,
  },
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    bottom: 80,
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
  },
  activeTab: {
    backgroundColor: '#C67C4E',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 6,
    color: 'white',
  },
  tab: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 8,
    paddingLeft: 8,
    color: '#313131',
    fontSize: 16,
  },
});
