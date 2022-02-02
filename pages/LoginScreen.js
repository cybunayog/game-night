// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { Button, Card } from 'react-native-paper';
// import { DefaultTheme } from 'react-native-paper';
// import LoginScreen from "react-native-login-screen";


// function Login ({ navigation })  {
//     return (
//         <ScrollView style={styles.scrollView}>
//     <LoginScreen
//       onLoginPress={() => {}}
//       onEmailChange={(email: string) => {}}
//       onPasswordChange={(password: string) => {}}
// />
//       <Card style={styles.card}>
//         <Card.Title title="Navigate to 'CreateAccount' Screen" />
//         <Card.Content>
//           <Button mode="contained" onPress={() => navigation.navigate('CreateAccount')}>
//             Navigate
//           </Button>
//         </Card.Content>
//       </Card>
//     </ScrollView>
//     )
// }


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: DefaultTheme.colors.background,
//     paddingTop: 10
//   },
//   card: {
//     width: '90%',
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   }
// });

// export default Login
import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function StartScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Welcome back.</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
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