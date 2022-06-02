import React, { useState, useCallback } from 'react';
import { Button, Text } from 'react-native-elements';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import {Formik} from 'formik';
import styles from '../style';

const SignUp = ({navigation}) => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: '#3D83C6', paddingTop: 30, alignItems:"center" }}>
            <Text style={{fontSize: 30, paddingBottom: 20}}>SIGN UP</Text>
            

            <TextInput
                style={styles.input}
                placeholder='First Name'
                onChangeText={text => setFName(text)}
                value={fName}
            />
            <Text>{fName}</Text>
            <TextInput
                style={styles.input}
                placeholder='Last Name'
                onChangeText={text => setLName(text)}
                value={lName}
            />
            <Text>{lName}</Text>
            <TextInput
                style={styles.input}
                placeholder='Email Address'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <Text>{email}</Text>
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Text>{password}</Text>
            <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                secureTextEntry
                onChangeText={text => setConfirmPass(text)}
                value={confirmPass}
            />
            <Text>{confirmPass}</Text>
            <TouchableOpacity>
                <View style={{backgroundColor: "purple", padding: 12, marginTop: 20, alignItems: 'center', borderRadius: 30, width: 100}}>
                    <Text style={{color: "white", fontWeight: 'bold'}} onPress={() => {navigation.navigate('HomeScreen'), console.log("was pressed (signup)")}}>SIGN UP</Text>
                </View>
            </TouchableOpacity>
            <Text>Already have an account? <Text onPress={() => {navigation.navigate('LoginScreen')}} style={{fontWeight: 'bold', color: "purple"}}>Log In!</Text></Text>
        </View>
    );
}

export default SignUp;