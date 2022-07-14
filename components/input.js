import { StyleSheet, TextInput } from 'react-native';

import React from 'react';

const Input = props => (
    <TextInput {...props} style = {{...styles.input, ...props.style}}/>
)

const styles = StyleSheet.create ({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Input