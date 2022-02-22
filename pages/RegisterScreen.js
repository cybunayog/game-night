
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import axios from 'axios';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { State } from 'react-native-gesture-handler'

export default function CreateAccount({ navigation }) {
  const [username, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [city, setCity] = useState({ value: '', error: '' })
  const [state, setState] = useState({ value: '', error: '' })
  const [game, setGame] = useState({ value: '', error: '' })

  // POST request using fetch with set headers
  // const requestOptions = {
  //   method: 'POST',
  //   body: JSON.stringify({ username: name, email, password, city, state, favGame: game })
  // };
  // fetch('http://178.128.150.93:3000/signup', requestOptions)
  //   .then(response => response.json())
  //   .then(data => navigation.replace('LoginScreen'));

  const signin = async (username, email, password, city, favGame) => {
    axios.post('http://178.128.150.93:3000/signup', {
      username,
      email,
      password,
      city,
      state,
      favGame
    }).then(res => {
      //res.data.token ?
      navigation.replace('LoginScreen');
    });
  }

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeScreen' }],
    })
  }

  return (
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={username.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!username.error}
          errorText={username.error}
        />
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
        <TextInput
          label="City"
          returnKeyType="next"
          value={city.value}
          onChangeText={(text) => setCity({ value: text, error: '' })}
          error={!!city.error}
          errorText={city.error}

        />
        <TextInput
          label="State"
          returnKeyType="next"
          value={state.value}
          onChangeText={(text) => setState({ value: text, error: '' })}
          error={!!state.error}
          errorText={state.error}

        />
        <TextInput
          label="Favorite Game"
          returnKeyType="next"
          value={game.value}
          onChangeText={(text) => setGame({ value: text, error: '' })}
          error={!!game.error}
          errorText={game.error}

        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => signin(username, email, password, city, favGame)}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})