import React, { useState } from 'react'
import { ScrollView, Text, View, Modal, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from './StartScreen'
//import { SettingsScreen } from "react-native-settings-screen"
import axios from 'axios';
import Background from '../components/Background'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { passwordValidator } from '../helpers/passwordValidator'
import { MaterialIcons } from '@expo/vector-icons'
import Avatar from "boring-avatars";
import { theme } from '../core/theme'

// //const Settings = () => {
export default function SettingsScreen({ navigation }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [favGame, setFavGame] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    return (

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.headerStyle}></View>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                    <MaterialIcons
                        name='close'
                        // justifyContent: "felx-start"
                        size={24}
                        style={styles.modalToggle}
                        onPress={() => setModalOpen(false)}
                    />
                    <Header style={styles.header}>
                        Edit Account
                    </Header>
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
                        onPress={() => setModalOpen(false)}>
                        Submit
                    </Button>


                </View>
            </Modal>
            {/* <Avatar
                size={40}
                name="Maria Mitchell"
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            /> */}
            <Image style={styles.avatar} source={require('../assets/avatar.png')} />
            <Button
                mode="outlined"
                style={styles.profileButton}
                onPress={() => setModalOpen(true)}>
                ddominguez17@apu.edu
            </Button>
            {/* <Ionicons name="md-settings-outline" size={80} color="#006600" /> */}

            <Button mode="outlined"
                style={{ alignItems: 'center', height: 50, width: 400 }}
                onPress={() => navigation.navigate('StartScreen')}>
                Delete Account
            </Button>
            <Button mode="contained"
                style={{ height: 50, width: 400 }}
                onPress={() => navigation.navigate('StartScreen')}>
                Sign Out
            </Button>
        </View>
    )
}
// //};

/*
import React from "react";
import { SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker } from 'react-native-settings-components';
import { ScrollView, View, StyleSheet, TouchableOpacity, Component } from 'react-native'
export default class SettingsScreen extends React.Component {
    constructor() {
        // super();
        this.state = {
            username: '',
            allowPushNotifications: false,
            gender: '',
        };
    }

    render() {

        <ScrollView style={{ flex: 1, backgroundColor: (Platform.OS === 'ios') ? colors.iosSettingsBackground : colors.white }}>

            <SettingsCategoryHeader title={'My Account'} textStyle={(Platform.OS === 'ios') ? { color: colors.monza } : null} />

            <SettingsDividerLong android={false} />

            <SettingsEditText
                title="Username"
                dialogDescription={'Enter your username.'}
                valuePlaceholder="..."
                negativeButtonTitle={'Cancel'}
                buttonRightTitle={'Save'}
                onSaveValue={(value) => {
                    console.log('username:', value);
                    this.setState({
                        username: value
                    });
                }}
                value={this.state.username}
                dialogAndroidProps={{
                    widgetColor: colors.monza,
                    positiveColor: colors.monza,
                    negativeColor: colors.monza,
                }}
            />

            <SettingsDividerShort />

            <SettingsPicker
                title="Gender"
                dialogDescription={'Choose your gender.'}
                possibleValues={[
                    { label: '...', value: '' },
                    { label: 'male', value: 'male' },
                    { label: 'female', value: 'female' },
                    { label: 'other', value: 'other' }
                ]}
                negativeButtonTitle={'Cancel'}
                buttonRightTitle={'Save'}
                onSaveValue={value => {
                    console.log('gender:', value);
                    this.setState({
                        gender: value
                    });
                }}
                value={this.state.gender}
                styleModalButtonsText={{ color: colors.monza }}
            />

            ...

            <SettingsSwitch
                title={'Allow Push Notifications'}
                onSaveValue={(value) => {
                    console.log('allow push notifications:', value);
                    this.setState({
                        allowPushNotifications: value
                    });
                }}
                value={this.state.allowPushNotifications}
                thumbTintColor={(this.state.allowPushNotifications) ? colors.switchEnabled : colors.switchDisabled}
            />

            ...

        </ScrollView>

    }

    signout() {
        return navigation.navigate('StartScreen');
    }

};
*/



const User = async (password, city, favGame) => {
    axios.patch('http://178.128.150.93:3000//api/v1/user/', { //how to grab user data
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    modalToggle: {
        // position: 'absolute',
        // right: 5,
        marginBottom: 10,
        marginTop: 50,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    flatButton: {
        marginBottom: 10,
        position: 'absolute',
        bottom: 100,
        left: 0,
        marginTop: 50,
        flex: 1,
        // alignItems: 'center',
        //borderWidth: 1,
        //borderColor: 'white',
        //padding: 20,
        borderRadius: 15,
        //alignSelf: 'center',

    },
    header: {
        color: '#101010',
        fontSize: 24,
        paddingHorizontal: 125,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    profileButton: {
        position: 'absolute',
        bottom: 375,
        marginTop: 50,
        flex: 1,

    },
    headerStyle: {
        backgroundColor: '#00BFFF',
        height: 200,
    },
    avatar: {
        position: 'absolute',
        bottom: 450,
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
})