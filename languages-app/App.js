import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/home';
import ActivityScreen from './tabs/activity';
import OtherScreen from './tabs/other';
import ChatScreen from './tabs/chat';
import ProfileScreen from './tabs/profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AllTabs({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen 
        name="Activity" 
        component={ActivityScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
              color= "blue"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Other" 
        component={OtherScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
              color= "blue"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {navigation.navigate('Chat')}}
              title="Chat"
              color= "blue"
            />
          ),
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
