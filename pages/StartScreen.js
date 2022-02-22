import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Game Night</Header>
            <Paragraph>
                Play games. Make friends. Have fun!
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
            >
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                Sign Up
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('HomeScreen')}
            >
                Home Test
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('SearchScreen')}
            >
                Search Test
            </Button>
        </Background>
    )
}
