import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function OnboardingScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./Onboarding.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        {/* Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            Fall in Love with{'\n'}Coffee in Blissful Delight!
          </Text>
          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>

          {/* Get Started Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    height: 536,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 48,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#A75B3E',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
