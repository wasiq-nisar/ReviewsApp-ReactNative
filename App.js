import React, { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './Screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.png')} 
        resizeMode='cover' 
        style={styles.rootScreen}
        imageStyle={styles.backgrouundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
} 

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, 
  }, 
  backgrouundImage: {
    opacity: 0.15
  }
})