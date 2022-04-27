
import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Agenda } from 'react-native-calendars'
import Button from '../components/Button'
import FlatButton from '../components/CreateEventButton'
import { Ionicons } from "@expo/vector-icons"
import { theme } from '../core/theme'
import SearchScreen from './SearchScreen'
import FriendsScreen from './FriendsScreen'
import Settings from './SettingsScreen'
import Schedule from './Agenda'
import TextInput from '../components/TextInput'
//import FloatingTitleTextInput from "react-native-floating-title-text-input"
//import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
// import Modal from "react-native-modal";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function Homescreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

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
            eventName="Event Name"
            placeholder="Name of Event"
          />
          <TextInput
            eventHostname="Host Name"
            placeholder="Host Name"
          />
          <TextInput
            eventDescription="eventDescription"
            placeholder="Special Host Notes"
          />
          <TextInput
            eventGame="game"
            placeholder="Which Game?"
          />
          <TextInput
            eventAddress="address"
            placeholder="Address of Event"
          />
          <TextInput
            eventTime="month day year time"
            placeholder="When? (mm/dd/yyyy hh:mm am/pm)"
          />
          <Button
            mode="contained"
            onPress={() => setModalOpen(false)}>

          </Button>

          <Button
            mode="contained"
            onPress={() => setModalOpen(false)}>
            CREATE
          </Button>


          {/* if (!eventName.trim()) {
              alert('Please enter Event Name');
              return;
            }
            if (!eventHostname.trim()) {
              alert('Please Enter Host Name');
              return;
            }
            if (!eventGame.trim()) {
              alert('Please Enter Game');
              return;
            }
            if (!eventAddress.trim()) {
              alert('Please Enter Event Address');
              return;
            }
            if (!eventTime.trim()) {
              alert('Please Enter Time');
              return;
            }
            alert('Success');
          }; */}
        </View>
      </Modal>


      {/* <MaterialIcons
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
      /> */}



      {/* <FlatButton
      //   //name='add'
      //   //size={24}
      //   onPress={() => setModalOpen(true)}
      // /> */}




      <Button
        mode="outlined"
        //style={styles.flatButton}
        onPress={() => setModalOpen(true)}>
        Create Event
      </Button>

      <Schedule />

      {/* <Button mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}>
        GO BACK
      </Button> */}

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            <Stack.Screen name="HomeScreen" component={Agenda} />
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View >

  )
}



function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search</Text>
    </View>
  )
}

function Messages() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages</Text>
    </View>

  )
}
// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings</Text>
//     </View>

//   )
// }

// function Friends() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Friends</Text>
//     </View>

//   )
// }

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';

          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Friends') {
            iconName = focused ? 'ios-people-sharp' : 'ios-people-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarOptions: {
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          showIcon: true,
        }


      })}
    >
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Search' component={SearchScreen} options={({ navigation }) => {
        return {
          tabbarButton: () => (<TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          </TouchableOpacity>),

        };
      }}
      />
      <Tab.Screen name='Friends' component={FriendsScreen} options={({ navigation }) => {
        return {
          tabbarButton: () => (<TouchableOpacity onPress={() => navigation.navigate('FriendsScreen')}>
          </TouchableOpacity>),

        };
      }}
      />
      {/*<Tab.Screen name='Messages' component={Messages} />*/}
      <Tab.Screen name='Settings' component={Settings} options={({ navigation }) => {
        return {
          tabbarButton: () => (<TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          </TouchableOpacity>),

        };
      }}
      />
    </ Tab.Navigator >
  );
}
export default function HomeScreen() {
  return (

    <MyTabs />


  );
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

  }
})
//export default HomeScreen