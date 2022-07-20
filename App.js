import { SafeAreaView, StyleSheet, View } from 'react-native'

import AppLoading from 'expo-app-loading';
import GameOverScreen from './pages/gameOver';
import GameScreen from './pages/gameScree';
import Header from './components/Header';
import StartScreen from './pages/startScreen';
import { useFonts } from 'expo-font';
import { useState } from "react";

export default function App() {
    const [loaded] = useFonts({Koulen: require('./assets/fonts/Koulen-Regular.ttf'), Exo: require('./assets/fonts/Exo2-Light.ttf')})
    
    const [userNumber, setUserNumber] = useState('')
    const [guessRounds, setGuessRounds] = useState(0)
    
    const handlerStartGame = selectedNumber => {
        setUserNumber(selectedNumber)
    }
    const handlerRestart = () => {
        setGuessRounds(0)
        setUserNumber(null)
    }
    const handlerGameOver = rounds =>
    {
        setGuessRounds(rounds)
    }
    
    let content = <StartScreen onStartGame = {handlerStartGame}/>

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userOption={userNumber} onGameOver={handlerGameOver} />
      } else if (guessRounds > 0) {
        content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handlerRestart} />
      }
/*
    if (userNumber)
    {   
        content = <GameScreen userOption={userNumber} />
    }*/

    if(!loaded) return <AppLoading />

    return (
        <SafeAreaView style = {styles.container}>
            <Header title = {"Guess the number"}/>
            {content}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1
    }
})