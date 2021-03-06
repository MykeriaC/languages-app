import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View, Button } from 'react-native';
// import { Card } from 'react-native-elements';
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
// import styles from './style.js';
// import { Avatar } from 'react-native-elements';
import Login from './entryScreens/Login';
import SignUp from './entryScreens/SignUp';
import SplashScreen from './entryScreens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AllTabs({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} />
        }}
      />
      <Tab.Screen 
        name="Activities" component={ActivityScreen} options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('ChatScreen')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <Ionicons name="planet" size={25} />
        }}
      />
      <Tab.Screen 
        name="Translate" component={TranslateScreen} options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('ChatScreen')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <MaterialCommunityIcons name="translate" size={25} />,
          // tabBarVisible: false,
        }}
      />
      <Tab.Screen 
        name="Profile" component={ProfileScreen} options={{
          headerRight: () => (
            <MaterialCommunityIcons style={{padding: "3%"}}
              name="message-text"
              size={25}
              onPress={() => {navigation.navigate('ChatScreen')}}
              title="Chat"
            />
          ),
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

const Auth = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{headerShown: false}}
        />
    <Stack.Screen
      name="SignUpScreen"
      component={SignUp}
      options={{headerShown: false}}
    />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="HomeScreen"
          component={AllTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen" 
          component={ChatScreen}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}