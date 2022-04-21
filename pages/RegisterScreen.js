
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateAccount({ navigation }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [favGame, setFavGame] = useState('');

  /**
 * Login
 * 
 * @param username
 * @param email
 * @param password 
 * @param city 
 * @param favGame
 * @return Object
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
      const { data } = res;
      console.log(data);
      if (res.data.user !== undefined && res.data.user.username === username) {
        console.log('User authenticated');
        //AsyncStorage.setItem('@auth', res.data.user);
        // Using ASYNCSTORAGE to hold onto data throughout app use
        storeData(res.data.user);
        navigation.navigate('HomeScreen');
        // USE ASYNCSTORAGE
      } else {
        // Put alert to enter a user or password
        alert("ERROR: Please Enter Correct Information")
        // Navigate back to Auth screen
        navigation.navigate('RegisterScreen');
      }
    })
      .catch(e => {
        alert("ERROR: Please Enter Correct Information")
        console.log(e.message);
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
  /*
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
  */
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
          onPress={() => signup(username, email, password, city, favGame)}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
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