import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { PROVIDER_GOOGLE } from "react-native-maps";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE} />
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