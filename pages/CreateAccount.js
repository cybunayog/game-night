import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Button, Text, Picker } from "react-native";
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function CreateAccount () {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    //  <View style={styles.container}>
    //   <Card style={styles.card}>
    //     <Card.Title title="Create Account" />
    //   </Card>
    // </View>
    <SafeAreaView>
       <Text style={styles.title}>
        Create Account
      </Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={text}
        placeholder="Enter Username"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Password (at least six characters)"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={text}
        placeholder="Selete Your State"
        keyboardType="numeric"
      />
      
       <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={text}
        placeholder="Selete Your City"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        value={text}
        placeholder="Enter Your Favorite Game"
        keyboardType="numeric"
      />
      <Button
        title="Submit"
        onPress={() => Alert.alert('Account creation successful!')}
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   baseText: {
    fontWeight: 'bold'
  },
   title: {
    textAlign: 'center',
    marginVertical: 8,
  },
    pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  }
});

export default CreateAccount;