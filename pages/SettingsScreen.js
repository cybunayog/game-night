import React, { useState } from 'react'
import { ScrollView, Text, View, Modal, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from './StartScreen'
import axios from 'axios';
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { passwordValidator } from '../helpers/passwordValidator'
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import * as ImagePicker from 'expo-image-picker';

// //const Settings = () => {
export default function SettingsScreen({ navigation }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [favGame, setFavGame] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [image, setImage] = useState(null);


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
                        onPress={() => patch().then(setModalOpen(false))}>
                        Submit
                    </Button>


                </View>
            </Modal >
            {/* <Avatar
                size={40}
                name="Maria Mitchell"
                variant="marble"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            /> */}
            {/* < Image style={styles.avatar} source={require('../assets/avatar.png')} /> */}

            {/* <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}

            <Button
                mode="outlined"
                style={styles.profileButton}
                onPress={() => setModalOpen(true)}>
                vavetissian@gmail.com
            </Button>
            {/* <Ionicons name="md-settings-outline" size={80} color="#006600" /> */}

            <Button mode="outlined"
                style={{ alignItems: 'center', height: 50, width: 400 }}
                //onPress={() => navigation.navigate('StartScreen')}>
                onPress={() => deleteAccount()}>

                Delete Account
            </Button>
            <Button mode="contained"
                style={{ height: 50, width: 400 }}
                onPress={() => deleteAccount().then * navigation.navigate('StartScreen')}>
                Sign Out
            </Button>
        </View >
    )
}

// const User = async (password, city, favGame) => {
//     axios.patch('http://178.128.150.93:3000//api/v1/user/', { //how to grab user data
//         password,
//         city,
//         state,
//         favGame
//     }).then(res => {
//         //res.data.token ?
//         const { data } = res;
//         console.log(data);
//     })
//         .catch(e => {
//             console.log(e.message);
//         });
// }

// const uploadPhoto = async () => {
//     setLoading(true);

//     let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
//     if (permissionResult.granted === false) {
//         alert("Permission to access camera roll is required.");
//         return;
//     }

//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         base64: true,
//         quality: 0.5
//     });

//     if (pickerResult.cancelled === true) {
//         return;
//     }

//     let base64img = `data:image/jpg;base64,${pickerResult.base64}`;

//     // Set photo for modal
//     setPhoto(pickerResult.uri);

//     let data = {
//         "file": base64img,
//         "upload_preset": "agape-app"
//     };
// }

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@auth')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const patch = async (password, city, state, favGame) => {
    let userData = getData();
    axios.patch('http://178.128.150.93:3000/user/' + userdata.username, {
        password: (password || userData.password),
        city: (city || userData.city),
        state: (state || userData.state),
        favGame: (favGame || userData.favGame),
    }).then(res => {
        console.log('Successfully Updated');
    })
        .catch(e => {
            alert("ERROR: Please Enter Correct Information")
            console.log(e.message);
        });
}
/*
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
}
*/
const deleteAccount = async () => {
    // let userData = (await getData());
    getID()
    // .then((userId) => {
    //     axios.delete('http://178.128.150.93:3000/user/' + userId).then(res => {
    //         console.log('Successfully Deleted');
    //     }).catch(e => {
    //         alert("ERROR: Problem Deleting Account")
    //         console.log(e.message);
    //     });
    // }).catch(e => {
    //     alert("ERROR: Problem Deleting Account")
    //     console.log(e.message);
    // });
}

const getID = async () => {
    // let userData = (await getData());
    try {
        let user = (await axios.get('http://178.128.150.93:3000/curUser')).data
        console.log(user);
        return (user.id);
    } catch (err) {
        console.error(err);
    }
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