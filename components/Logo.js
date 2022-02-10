import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../pages/assets/GameNight_Logo_Square_BLUE.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
})