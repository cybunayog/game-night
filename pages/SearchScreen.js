import * as React from 'react';
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
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
                        latitude: 34.133547,
                        longitude: -117.907542,
                    }}
                    description={"This is a marker in React Natve"}
                >

                    <Image source={require('./assets/gameNight_marker.png')} style={{ height: 100, width: 100 }} />
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});