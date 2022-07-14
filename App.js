import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from "react"

import AppLoading from 'expo-app-loading';
import GameScreen from './pages/gameScree';
import Header from './components/Header';
import StartScreen from './pages/startScreen';
import {StatusBar} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
    const [loaded] = useFonts({Koulen: require('./assets/fonts/Koulen-Regular.ttf'), Exo: require('./assets/fonts/Exo2-Light.ttf')})
    const [userNumber, setUserNumber] = useState('')
    const handlerStartGame = selectedNumber => {
        setUserNumber(selectedNumber)
    }
    let content = <StartScreen onStartGame = {handlerStartGame}/>

    if (userNumber){
    content = <GameScreen userOption/>     
    }

    if(!loaded) return <AppLoading />

    return (
        <View style = {styles.container}>
            <Header title = {"Guess the number"}/>
            <StartScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1
    }
})