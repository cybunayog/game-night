import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Dice from '../components/DiceIcon'

export default function App() {
    var PeopleArray = [people, setPeople] = useState([

        //people: [
        { name: 'thedude87', id: '1' },
        { name: 'dudeman09', id: '2' },
        { name: 'penpineapplepen', id: '3' },
        { name: 'bakugo4lyfe', id: '4' },
        { name: 'absolootchad', id: '5' },
        { name: 'fortnitesux', id: '6' },
        { name: 'genshinrulez', id: '7' },

    ])


    const pressHandler = (id) => {
        //console.log(id)
        setModalFriend(true)
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [modalFriend, setModalFriend] = useState(false);
    /*
        setPeople = (people) => {
            return people.filter(people => people.id != id);
        }
    
    const combinePress = () => {
        //setPeople(people);
        setModalFriend(false);
    }
*/
    return (
        <View style={styles.container} >
            <Button
                mode="contained"
                onPress={() => setModalOpen(true)}
                backgroundColor="0000ff"
                borderColor='#777'
                title="Add Friend">
            </Button>
            <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (     //FlastList automatically looks for the key property
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />


            <Modal visible={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                    <MaterialIcons
                        name='close'
                        // justifyContent: "felx-start"
                        size={24}
                        style={styles.modalToggle}
                        onPress={() => setModalOpen(false)}
                    />
                    <TextInput
                        style={styles.input}
                        eventName="Search Users"
                        placeholder="Search Users"

                    />

                </View>
            </Modal>

            <Modal visible={modalFriend} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                    <MaterialIcons
                        name='close'
                        // justifyContent: "flex-start"
                        size={24}
                        style={styles.modalToggle}
                        onPress={() => setModalFriend(false)}
                    />
                    <Dice />

                    <Text style={styles.text}>
                        Username: thedude87
                    </Text >



                    <Text style={styles.text}>
                        Favorite Game: Monopoly
                    </Text>
                    <Button
                        mode="contained"
                        onPress={() => setModalFriend(false)}
                        backgroundColor="0000ff"
                        borderColor='#777'
                        title="Remove Friend">
                    </Button>

                </View >
            </Modal >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        //width: 200,
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
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#87ceeb',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,
    },
    text: {
        fontSize: 24,
        marginHorizontal: 60,
        marginTop: 24,
    }
});
