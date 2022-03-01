
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

const login = async (username, password) => {
    axios.post('http://178.128.150.93:3000/login', {
        username,
        password,
    }).then(res => {
        //res.data.token ?
        const { data } = res;
        console.log(data);
    })
        .catch(e => {
            console.log(e.message);
        });
}

export default function StartScreen({ navigation }) {
    const [username, setName] = useState('');
    const [password, setPassword] = useState({ value: '', error: '' })
    const [errorMessage, setErrorMessage] = useState('');

    const onLoginPressed = () => {
        const nameError = nameValidator(String(username.value))
        const passwordError = passwordValidator(password.value)
        if (nameError || passwordError) {
            setName({ ...username, error: nameError })
            setPassword({ ...password, error: passwordError })
            return
        }
        /*
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        })
        */
        login(username, password).then(() => navigation.navigate('HomeScreen'))
            .catch(e => {
                console.log(e.message);
            });
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
                onChangeText={(text) => setName(text)}
                error={!!errorMessage}
                errorText={errorMessage}
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
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
            <Button mode="contained" onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
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