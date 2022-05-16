import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/home';
import ActivityScreen from './tabs/activity';
import TranslateScreen from './tabs/translate';
import ChatScreen from './tabs/chat';
import ProfileScreen from './tabs/profile';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './style.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AllTabs({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} />
        }}
      />
      <Tab.Screen 
        name="Activities" 
        component={ActivityScreen}
        
        options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <Ionicons name="planet" size={25} />
        }}
      />
      <Tab.Screen 
        name="Translate" 
        component={TranslateScreen}
        options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <MaterialCommunityIcons name="translate" size={25} />
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={AllTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat" 
          component={ChatScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
