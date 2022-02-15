
import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Button from '../components/Button'
import { Ionicons } from "@expo/vector-icons"
import { theme } from '../core/theme'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function Homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}
      >
        GO BACK
      </Button>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>


          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>

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
  }
})

//export default HomeScreen