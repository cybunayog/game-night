import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
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
        <MapView.Callout>
        <View style={{height: 80, width: 200}}>
          <Text styles={styles.paragraph}> Monopoly </Text>
          <Text> StarBucks, Foothill Ave.</Text>
          <Text> Host: Danielle Dominguez</Text>
          <Text> March 14, 2022 </Text>
        </View>
      </MapView.Callout>
                    <Image source={require('./assets/gameNight_marker.png')} style={{ height: 70, width: 70 }} />
                </Marker>
              <Marker
                    coordinate={{ // jp coffee shop
                        latitude: 34.1280, 
                        longitude: -117.8496,
                    }}
                    description={"Life"}
                >

                    <Image source={require('./assets/gameNight_marker.png')} style={{ height: 70, width: 70 }} />
                </Marker>
               
           </MapView>
        
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
