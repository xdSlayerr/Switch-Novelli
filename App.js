import { StyleSheet, Text, View } from 'react-native'

import AppLoading from 'expo-app-loading';
import GameScreen from './pages/gameScree';
import Header from './components/Header';
import StartScreen from './pages/startScreen';
import { useFonts } from 'expo-font';
import { useState } from "react"

export default function App() {
    const [loaded] = useFonts({Koulen: require('./assets/fonts/Koulen-Regular.ttf'), Exo: require('./assets/fonts/Exo2-Light.ttf')})
    const [userNumber, setUserNumber] = useState('')
    
    const handlerStartGame = selectedNumber => {
        setUserNumber(selectedNumber)
    }
    let content = <StartScreen onStartGame = {handlerStartGame}/>

    if (userNumber) {
        content = <GameScreen userOption={userNumber} />
      }

    if(!loaded) return <AppLoading />

    return (
        <View style = {styles.container}>
            <Header title = {"Guess the number"}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1
    }
})