import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style = {styles.inputContainer}>
      <TextInput style= {styles.numberInput} maxLength={2} keyboardType='number-pad'/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4, // For Android Shadow
    // For iOS Shadow
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
  }, 
  numberInput: {
    height: 50, 
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    color: "#ddb52f",
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
})

export default StartGameScreen