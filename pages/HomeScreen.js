
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Button from '../components/Button'
import { Ionicons } from "@expo/vector-icons"
import { theme } from '../core/theme'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function Homescreen({navigation}) {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
       <Button
                mode="outlined"
                onPress={() => navigation.navigate('StartScreen')}
            >
              GO BACK
            </Button>
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
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
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