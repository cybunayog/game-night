import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
    // Special Thanks to Ricardo Arechiga for designing the logo.
    return <Image source={require('../pages/assets/dice.png')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        marginBottom: 10,
        alignSelf: 'center',
    },
})