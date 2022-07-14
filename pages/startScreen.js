import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, {useState} from 'react';

import Card from '../components/card';
import Colors from '../constants/colors'
import Input from '../components/input'
import {Keyboard} from 'react-native';
import  { NumberContainer } from '../components/numberContainer';

const StartScreen = props => {

    const [enteredValue, setEnteredValue] = useState ('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState ('');
    
    const handlerInputNumber = text =>{
         setEnteredValue(text.replace(/[^0-9]/g, ''))
    }
    const onHandlerResetInput = () => {
      setConfirmed(false)
      setEnteredValue('')
     
    }
    const handlerConfirmInput = () => {
      let choseNumber = parseInt(enteredValue)
      if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1) return;
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
  }
   //const confirmedOutput = confirmed ? <Text> Number: {selectedNumber}</Text> : null

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style = {styles.screen}>
                <Text style = {styles.title}> Game Start</Text>
                <Card style = {styles.inputContainer}>
                    <Text>Pick a number</Text>
                    <Input    
                      style = {styles.input}
                      blurOnSumbit
                      autoCapitalize = 'none'
                      autoCorrect = {false}
                      keyboardType = 'numeric'
                      maxLength = {2}
                      value = {enteredValue}
                      onChangeText = {handlerInputNumber}
                    />
                    <View style = {styles.buttonContainer}>
                      {enteredValue.length > 0 &&(
                        <>
                        <Button title = 'Clean' onPress = {() => onHandlerResetInput()}  color = {Colors.accent}/>
                        <Button title = 'Confirm' onPress = {() => handlerConfirmInput()} color = {Colors.primary} disabled = {enteredValue.length < 2 ? true : false}/> 
                        </>                       
                      )}    
                    </View>
              </Card>
                {confirmed &&(
                  <Card style = {styles.summaryContainer}>
                    <Text>Selection:</Text>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <Button title='Start!!!' onPress={() => props.onStartGame(selectedNumber)}/>
                  </Card>
                )}
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
    marginVertical: 10,
    fontFamily: 'Koulen'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
summaryContainer: {
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '60%',
  height: '30%',
}

})

export default StartScreen 