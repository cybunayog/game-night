import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { theme } from '../core/theme'

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        //paddingHorzontal: 10,
        backgroundColor: '#1760d6',

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})