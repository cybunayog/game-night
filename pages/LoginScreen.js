
// export default Login
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import axios from 'axios';
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function StartScreen({ navigation }) {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * Login
     * 
     * @param username
     * @param password
     * 
     * @return Object
     */
    const login = async (username, password) => {
        axios.post('http://178.128.150.93:3000/login', {
            username,
            password
        }).then(res => {
            const { data } = res;
            console.log(data);
            console.log('User authenticated');
            // Using ASYNCSTORAGE to hold onto data throughout app use
            storeData(res.data);
            // navigate back to home screen

            navigation.navigate('HomeScreen');
        }).catch(e => {
            alert("ERROR: Please Enter Correct Information")
            console.log(e.message);
            navigation.navigate('LoginScreen');
        });
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@auth', jsonValue)
        } catch (e) {
            // saving error
            alert("ERROR: Problem Occurred with Async Storage")
        }
    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Welcome back.</Header>
            <TextInput
                label="Username"
                returnKeyType="next"
                value={username}
                onChangeText={(name) => setName(name)}
                error={!!errorMessage}
                errorText={errorMessage}
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password}
                onChangeText={(pass) => setPassword(pass)}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button
                mode="contained"
                onPress={() => login(username, password)}
                style={{ marginTop: 24 }}
            >
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background >
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})