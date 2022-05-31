import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import { View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
// import { Formik } from 'formik';
import styles from '../style.js';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#3D83C6', paddingTop: 30, alignItems:"center" }}>
            <Text style={{fontSize: 30, paddingTop: 50, paddingBottom: 20}}>LOGIN</Text>
            

            <TextInput
                style={styles.input} 
                placeholder='Email Address'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TouchableOpacity>
                <View style={{backgroundColor: "purple", padding: 12, margin: 10, alignItems: 'center', borderRadius: 30, width: 100}}>
                    {/* <Text>{email}</Text> */}
                    <Text style={{color: "white", fontWeight: 'bold'}} onPress={() => {navigation.push('HomeScreen', {nameOf: "Lucy"}), console.log("was pressed (login)");}}>LOG IN</Text>
                </View>
            </TouchableOpacity>
            {/* <Button style={{paddingTop: 20, borderRadius: 15, overflow: 'hidden'}} title="Log In" buttonStyle={{ backgroundColor: 'black'}} onPress={() => {navigation.navigate('HomeScreen')}}></Button> */}
            <Text>Dont have an account? <Text onPress={() => {navigation.navigate('SignUpScreen')}} style={{fontWeight: 'bold', color: 'purple'}}>Sign Up!</Text></Text>
        </SafeAreaView>
    );
}

export default Login;