import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from './StartScreen'

//const Settings = () => {
export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
            <Ionicons name="md-settings-outline" size={80} color="#006600" />
            <Button mode="outlined"
                onPress={() => navigation.navigate('StartScreen')}>
                Sign Out
            </Button>
        </View>
    )
}
//};


//export default Settings;