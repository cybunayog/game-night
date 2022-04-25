import React, { useState } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet, Text, View, Dimensions, Image, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import MapView, { Marker, AnimatedRegion } from 'react-native-maps'
import { PROVIDER_GOOGLE } from "react-native-maps"

export default function SearchScreen({ navigation }) {
    return (
        //  View style={styles.container}>
        <MapView

            style={styles.map}
            loadingEnabled={true}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 34.133547,
                longitude: -117.907542,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            mapType={"standard"}
            zoomEnabled={true}
            scrollEnabled={true}
            showsScale={true}

        >
            <Marker
                coordinate={{
                    latitude: 34.133547, // Azusa
                    longitude: -117.907542,
                }}
                title={"You Are Here!"}
            >

                <Image source={require('./assets/gameNight_markerBlack.png')} style={{ height: 75, width: 75 }} />
            </Marker>
            <Marker
                coordinate={{
                    latitude: 34.12870314, // starbucks
                    longitude: -117.8836472,
                }}
            //  description={"Monopoly"}
            >
                <Image source={require('./assets/gameNight_marker.png')} style={{ height: 70, width: 70 }} />
            </Marker>
            <Marker
                coordinate={{ // jp coffee shop
                    latitude: 34.1280,
                    longitude: -117.8496,
                }}
            >

                <Image source={require('./assets/gameNight_marker.png')} style={{ height: 70, width: 70 }} />
            </Marker>
            {/* {<Picker
                style={{ height: 100, width: 250 }}
                itemStyle={{ backgroundColor: "white", color: "black", fontFamily: "Arial", fontSize: 17 }}
            >
                <Picker.Item label="Monopoly" value="monopoly" />
                <Picker.Item label="Clue" value="clue" />
                <Picker.Item label="Life" value="life" />
                <Picker.Item label="Dungeons and Dragons" value="dungeons" />
                <Picker.Item label="Yu-Gi-Oh" value="yu-gi-oh" />
                <Picker.Item label="Magic: The Gathering" value="magic" />
                <Picker.Item label="Scrabble" value="scrabble" />
                <Picker.Item label="Settlers of Catan" value="settlers of catan" />
                <Picker.Item label="Werewolf/Mafia" value="werewolf" />
                <Picker.Item label="Pandemic" value="pandemic" />
                <Picker.Item label="Risk" value="risk" />
                <Picker.Item label="Other" value="other" />
            </Picker>}

            {<Picker
                style={{ height: 200, width: 600 }}
                itemStyle={{ backgroundColor: "white", color: "black", fontFamily: "Arial", fontSize: 17 }}>
                <Picker.Item label="5 mi" value="5 mi" />
                <Picker.Item label="10 mi" value="10 mi" />
                <Picker.Item label="15 mi" value="15 mi" />
                <Picker.Item label="20 mi" value="20 mi" />
                <Picker.Item label="25 mi" value="25 mi" />
                <Picker.Item label="30 mi" value="30 mi" />
                <Picker.Item label="35 mi" value="35 mi" />
                <Picker.Item label="40 mi" value="40 mi" />
                <Picker.Item label="45 mi" value="45 mi" />
                <Picker.Item label="50 mi" value="50 mi" />
            </Picker>} */}
        </MapView >

    )
}
const styles = StyleSheet.create({
    image: {
        width: 430,
        height: 760,
        marginBottom: 10,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    paragraph: {
        margin: 24,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})
