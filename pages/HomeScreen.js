
import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Modal, TouchableOpacity, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Button from '../components/Button'
import FlatButton from '../components/CreateEventButton'
import { Ionicons } from "@expo/vector-icons"
import { theme } from '../core/theme'
import Schedule from './Agenda'
import TextInput from '../components/TextInput'
//import FloatingTitleTextInput from "react-native-floating-title-text-input"
//import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
// import Modal from "react-native-modal";
import DateTimePicker from '@react-native-community/datetimepicker';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()





function Homescreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState({ value: '', error: '' });
  const [eventHostname, setEventHostname] = useState({ value: '', error: '' });
  const [eventDescription, setEventDescription] = useState({ value: '', error: '' });
  const [eventGame, setEventGame] = useState({ value: '', error: '' });
  const [eventAddress, setEventAddress] = useState({ value: '', error: '' });
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const createEvent = async (eventName, eventHostname, eventDescription, eventGame, eventAddress) => {
    axios.post('http://178.128.150.93:3000/createEvent', {
      eventName,
      eventHostname,
      eventDescription,
      eventGame,
      eventAddress,
    }).then(res => {
      //res.data.token ?
      navigation.replace('HomeScreen');
    });
  }

  // const showPicker = () => {
  //   setIsPickerShow(true);
  // };


  // const onChange = (event, value) => {
  //   setDate(value);
  //   if (Platform.OS === 'android') {
  //     setIsPickerShow(false);
  //   }
  // };

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
            label="Event Name"
            returnKeyType="next"
            //placeholder="Name of Event"
            value={eventName.value}
            onChangeText={(text) => setEventName({ value: text, error: '' })}
            error={!!eventName.error}
            errorText={eventName.error}
          />
          <TextInput
            label="Host Name"
            returnKeyType="next"
            //placeholder="Host Name"
            value={eventHostname.value}
            onChangeText={(text) => setEventHostname({ value: text, error: '' })}
            error={!!eventHostname.error}
            errorText={eventHostname.error}
          />
          <TextInput
            label="Event Description"
            returnKeyType="next"
            //placeholder="Special Host Notes"
            value={eventDescription.value}
            onChangeText={(text) => setEventDescription({ value: text, error: '' })}
            error={!!eventDescription.error}
            errorText={eventDescription.error}
          />
          <TextInput
            label="Game"
            returnKeyType="next"
            //placeholder="Which Game?"
            value={eventGame.value}
            onChangeText={(text) => setEventGame({ value: text, error: '' })}
            error={!!eventGame.error}
            errorText={eventGame.error}
          />
          <TextInput
            label="Address"
            returnKeyType="next"
            //placeholder="Address of Event"
            value={eventAddress.value}
            onChangeText={(text) => setEventAddress({ value: text, error: '' })}
            error={!!eventAddress.error}
            errorText={eventAddress.error}
          />

          <View>
            <Button
              mode="contained"
              title='DatePicker'
              onPress={() => showMode('date')}>
              DATE
            </Button>

            <Button
              mode="contained"
              title='TimePicker'
              onPress={() => showMode('time')}>
              TIME
            </Button>
          </View>

          {show && (
            <DateTimePicker
              style={styles.dateTimePicker}
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={false}
              display='default'
              onChange={onChange}
            />)}



          <Button
            mode="contained"
            onPress={() => signup(eventName, eventHostname, eventDescription, eventGame, eventAddress).then(() => navigation.navigate('HomeScreen'))}
            onPress={() => setModalOpen(false)}>
            CREATE
          </Button>
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

      <Button mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}>
        GO BACK
      </Button>

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
function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>

  )
}

function Friends() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Friends</Text>
    </View>

  )
}

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
          } else if (route.name === 'Messages') {
            iconName = focused ? 'ios-chatbox-ellipses' : 'ios-chatbox-ellipses-outline';
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
      <Tab.Screen name='Friends' component={Friends} />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Messages' component={Messages} />
      <Tab.Screen name='Settings' component={Settings} />
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  dateTimePicker: {
    width: 98,
    // height: 200,
    display: 'flex',
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // alignItems: 'flex-start',
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