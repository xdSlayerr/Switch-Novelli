import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors'
import React from "react";

const image = { uri: 'https://us.123rf.com/450wm/sn333g/sn333g1901/sn333g190100400/115836023-marco-colorido-de-vector-de-educaci%C3%B3n-stem-con-fondo-oscuro.jpg?ver=6' }

const Header = props => {
    const {title} = props

    return (
        <ImageBackground  source={image} 
        resizeMode="cover" 
        style={styles.image}
        >
        <View style = {styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header:{
        width:"100%",
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#FFFCE8',
        fontSize: 22,
    }
})

export default Header