import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style.js';


const SplashScreen = ({navigation}) => {
    //State for ActivityIndicator animation
    const [animating, setAnimating] = useState(true);

    const img = require('../assets/alien.png');
   
    useEffect(() => {
      setTimeout(() => {
        setAnimating(false);
        //Check if user_id is set or not
        //If not then send for Authentication
        //else send to Home Screen
        AsyncStorage.getItem('user_id').then((value) =>
          navigation.replace(
            value === null ? 'Auth' : 'HomeScreen'
          ),
        );
      }, 5000);
    }, []);
   
    return (
      <View style={styles.container}>
        <Image
          source={img}
          style={{width: '90%', resizeMode: 'contain', margin: 30}}
        />
        <Text style={{fontSize: 50}}>NAME</Text>
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    );
  };

  export default SplashScreen;