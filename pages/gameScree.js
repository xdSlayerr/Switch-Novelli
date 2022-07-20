import {Button, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import {Alert} from 'react-native';
import Card from '../components/card';
import { NumberContainer } from "../components/numberContainer";

const GameScreen = props => {

    const { width, height } = useWindowDimensions();
    const {userOption, onGameOver} = props;
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1)
    const currentHigh = useRef(100)
    
    
    const [currentGuess, setCurrentGuess] = useState()
    const generateRandomBetween = (min, max, userChoise) => {
        min = Math.ceil(min) // redondea el numero para arriba
        max = Math.floor(max)
        let  randomNumber = Math.floor(Math.random() * (max - min) + min)  
        
        if (randomNumber === userChoise){
            return generateRandomBetween(min, max, userChoise)
        }
        else{
            return setCurrentGuess(randomNumber)
        }
    }


    const handlerNextGuess = direction => {
        if(
            (direction === 'lower' && currentGuess < userOption) || (direction === 'greater' && currentGuess > userOption)
        ){
            return Alert.alert('lier lier', 'not true!!!!!!', [{text: 'try again', style: 'cancel'}
            ])
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setRounds(current => current + 1)
    }

    useEffect (() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])

    useEffect (() => {
        if (currentGuess == userOption) onGameOver(rounds)},
        [currentGuess, userOption, onGameOver]
        )

    return(
        <View style = {styles.screen}>
            <Text>oponent:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style = {{...styles.buttonContainer, marginTop: height > 600 ? 20 : 10}}>
                <Button title = 'Smaller' onPress = {() => handlerNextGuess('lower')}/>
                <Button title = 'Greater' onPress ={() => handlerNextGuess('greater')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#5F4BB6'
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen