import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import Header from './components/Header';
import React from "react"
import StartScreen from './pages/startScreen';
import {StatusBar} from 'react-native';

export default function App() {
    return (
        <View style = {styles.container}>
            <Header title = {"Guess the number"}/>
            <StartScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
    }

})