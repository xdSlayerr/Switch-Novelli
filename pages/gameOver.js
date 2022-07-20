import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react';

import Card from '../components/card'
import {useWindowDimensions} from 'react-native';

const GameOverScreen = props => {
    const [isPortrait, setIsPortrait] = useState(false)
    
    const onPortrait = () => {
        const dim = useWindowDimensions()
        return dim.height >= dim.width;
    }

    const statePortrait = () => setIsPortrait(onPortrait())

    useEffect (() => {
        Dimensions.addEventListener('change', statePortrait)
        return () => {
            Dimensions.removeEventListener('change', statePortrait)
        }
    })
    
    return (
        <View style={styles.screen}>
          <Image style={styles.image} source = {require ('../assets/gameover.png')}/> 
            <Card style={styles.resultContainer}>
                <Text> Tries: {props.rounds}</Text>    
                <Text>The number was: {props.choice}</Text>   
            </Card> 
            <Button title='New Game' onPress= {props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    resultContainer: {
        marginBottom: 30,
        padding: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: 300
    }
})

export default GameOverScreen


//<Image style={styles.image} source = {require('.../assets/gameover.jpg')}/>