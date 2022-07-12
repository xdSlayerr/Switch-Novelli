import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, {useState} from 'react';

import Card from '../components/card';
import Colors from '../constants/colors'
import Input from '../components/input'
import {Keyboard} from 'react-native';

const StartScreen = () => {

    const [enteredValue, setEnteredValue] = useState ('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState ('');
    const handlerInputNumber = text =>{
         setEnteredValue(text.replace(/[^0-9]/g, ''))
    }
    const onHandlerResetInput = () => {
      setEnteredValue('')
      setConfirmed(false)
    }
    const onHandlerConfirmInput = () => {
      const choseNumber = parseInt(enteredValue)
      if(choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) 
        return
          setConfirmed(true)
          setSelectedNumber(parseInt(enteredValue))
          setEnteredValue('')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style = {styles.screen}>
                <Text style = {styles.title}> Game Star</Text>
                <View style = {styles.inputContainer}>
                  <Text>Pick a number</Text>
                  <Input    
                    style = {styles.input}
                    blurOnSumbit
                    autoCapitalize = 'none'
                    autoCorrecct = {false}
                    keyboardType = 'numeric'
                    maxLength = {2}
                    value = {enteredValue}
                    onChangeText = {handlerInputNumber}
                  />
                  <View style = {styles.buttonContainer}>
                    <Button title = 'Clean' onPress={() => {}} color = {Colors.accent}/>
                    <Button title = 'Confirm' onPress={() => {}} color = {Colors.primary}/>
                  </View>
                </View>
            </View>
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    padding: 10, 
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  }
})

export default StartScreen