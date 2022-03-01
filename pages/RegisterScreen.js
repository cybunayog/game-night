
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
//import { State } from 'react-native-gesture-handler'

export default function CreateAccount({ navigation }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [favGame, setFavGame] = useState('');


  const signin = async (email, password) => {
    axios.post('http://178.128.150.93:3000/signin', {
      email,
      password,
    }).then(res => {
      const { data } = res;
      console.log(res.data);

      if (data) navigation.navigate('HomeScreen');
    })
      .catch(e => {
        console.log(e.message);
      });
  }
  /**
   * sign up
   */
  const signup = async (username, email, password, city, favGame) => {
    axios.post('http://178.128.150.93:3000/signup', {
      username,
      email,
      password,
      city,
      state,
      favGame
    }).then(res => {
      //res.data.token ?
      const { data } = res;
      console.log(data);
    })
      .catch(e => {
        console.log(e.message);
      });
  }

  const onSignUpPressed = () => {
    const nameError = nameValidator(username);
    const emailError = emailValidator(email);
    const passwordError = passwordValidator(password);

    if (emailError) {
      setErrorMessage(emailError);
    } else if (nameError) {
      setErrorMessage(nameError);
    } else if (passwordError) {
      setErrorMessage(passwordError);
    }

    navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }], });
  }

  return (
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="Username"
          returnKeyType="next"
          value={username}
          onChangeText={(text) => setName(text)}
          error={!!errorMessage}
          errorText={errorMessage}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          error={!!errorMessage}
          errorText={errorMessage}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password}
          onChangeText={(text) => setPassword(text)}
          error={!!errorMessage}
          errorText={errorMessage}
          secureTextEntry
        />
        <TextInput
          label="City"
          returnKeyType="next"
          value={city}
          onChangeText={(text) => setCity(text)}
          error={!!errorMessage}
          errorText={errorMessage}

        />
        <TextInput
          label="State"
          returnKeyType="next"
          value={state}
          onChangeText={(text) => setState(text)}
          error={!!errorMessage}
          errorText={errorMessage}

        />
        <TextInput
          label="Favorite Game"
          returnKeyType="next"
          value={favGame}
          onChangeText={(text) => setFavGame(text)}
          error={!!errorMessage}
          errorText={errorMessage}

        />
        <Button
          mode="contained"
          onPress={() => signup(username, email, password, city, favGame).then(() => navigation.navigate('HomeScreen'))}
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