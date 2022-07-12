import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors'
import React from "react";

const numberContainer = props => {
    return (
        <View style = {StyleSheet.container}>
            <Text style = {styles.number}>{props.children}</Text>
        </View>
    )
}


const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    }
})
