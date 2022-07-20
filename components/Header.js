import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors'
import React from "react";

const Header = props => {
    const {title} = props

    return (
        <View style = {styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        width:"100%",
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0075C4'
    },
    headerTitle: {
        color: '#FFFCE8',
        fontSize: 22,
    }
})

export default Header