import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from '../components/card';
import { NumberContainer } from "../components/numberContainer";

const GameScreen = props => {
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

    useEffect (() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])

    return(
        <View style = {styles.screen}>
            <Text>oponent:</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style = {styles.buttonContainer}>
                <Button title = 'Smaller' onPress = {() => {}}/>
                <Button title = 'Bigger' onPress = {() => {}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen