// import React from 'react';
// import { SafeAreaView, StyleSheet, TextInput, View, Button, Text, Picker } from "react-native";
// import { Card } from 'react-native-paper';
// import { DefaultTheme } from 'react-native-paper';


// function CreateAccount () {
//   const [text, onChangeText] = React.useState(null);
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     //  <View style={styles.container}>
//     //   <Card style={styles.card}>
//     //     <Card.Title title="Create Account" />
//     //   </Card>
//     // </View>
//     <SafeAreaView>
//        <Text style={styles.title}>
//         Create Account
//       </Text>
//       <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         value={text}
//         placeholder="Enter Username"
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         // onChangeText={onChangeNumber}
//         value={number}
//         placeholder="Enter Password (at least six characters)"
//         keyboardType="numeric"
//       />
//        <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         value={text}
//         placeholder="Selete Your State"
//         keyboardType="numeric"
//       />

//        <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         value={text}
//         placeholder="Selete Your City"
//         keyboardType="numeric"
//       />
//        <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         value={text}
//         placeholder="Enter Your Favorite Game"
//         keyboardType="numeric"
//       />
//       <Button
//         title="Submit"
//         onPress={() => Alert.alert('Account creation successful!')}
//       />
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: DefaultTheme.colors.background,
//     alignItems: 'center',
//     paddingTop: 10
//   },
//   card: {
//     width: '90%'
//   },
//    input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//    baseText: {
//     fontWeight: 'bold'
//   },
//    title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//     pickerStyle: {
//     width: "100%",
//     height: 40,
//     color: "#007aff",
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   }
// });

// export default CreateAccount;
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

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
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
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
        label="State"
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
        label="Favorite Game"
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
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