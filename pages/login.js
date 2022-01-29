import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import LoginScreen from "react-native-login-screen";


function Login ({ navigation })  {
    return (
        <ScrollView style={styles.scrollView}>
       <LoginScreen
  
  onLoginPress={() => {}}
  onHaveAccountPress={() => {}}
  onEmailChange={(email: string) => {}}
  onPasswordChange={(password: string) => {}}
/>
      <Card style={styles.card}>
        <Card.Title title="Navigate to 'CreateAccount' Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('CreateAccount')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default Login