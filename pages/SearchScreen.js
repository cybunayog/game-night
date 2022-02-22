import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Image, StyleSheet } from 'react-native'

export default function SearchScreen({ navigation }) {
    return (
        <Image source={require('./assets/GameNight_App_Inverse.png')} style={styles.image} />
    )
}
const styles = StyleSheet.create({
  image: {
    width: 430,
    height: 760,
    marginBottom: 10,
  },
})
