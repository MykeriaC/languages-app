import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style.js';
import { Avatar, Badge, Divider, Overlay, Button } from 'react-native-elements';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useCallback } from 'react';

function ProfileScreen() {

    // set state for the log out
    const [logout, setLogout] = useState(false);
    // high order function that changes the value of log out
    const onPressL = () => setLogout(!logout);

    return (
      <View style={{ flex: 1, backgroundColor: '#3D83C6', paddingTop: 30 }}>
        <View style={{ alignItems:"center" }}>
          <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 85, borderRadius: 10, backgroundColor: 'white', shadowColor: 'rgba(0,0,0, .4)', shadowOffset: { height: 1, width: 1 }, shadowOpacity: 3,shadowRadius: 1, backgroundColor: '#fff'}}>
            <Avatar
              size={64}
              rounded
              title='EX'
              containerStyle={{ backgroundColor: 'grey', alignContent: 'center' }}
            />
            <Text style={{paddingTop: 10, fontWeight: 'bold'}}>Name Here</Text>
            {/* <Text style={{textAlign: 'center' }}>🇺🇸</Text> */}
            <Badge
              // badgeStyle={{}}
              containerStyle={{paddingTop: 10, color: "black"}}
              // onPress={() => {
              //   alert("onPress");
              // }}
              status="primary"
              // textProps={{}}
              textStyle={{ color: "#EFE" }}
              value="Beginner"
              // options={{}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{paddingTop: 20, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
          <Text style={{fontWeight: 'bold'}}><Ionicons name="md-settings-outline" size={30} color="black"></Ionicons>     Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressL} style={{paddingTop: 20, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}>
          {/* <Divider style={{flexDirection: 'row', justifyContent: 'left', alignItems: 'left'}}> */}
            <Text style={{fontWeight: 'bold'}}><Ionicons name="log-out-outline" size={30} color="black" />     Log Out</Text>
          {/* </Divider> */}
        </TouchableOpacity>
        <Overlay style={{}} isVisible={logout} onBackdropPress={onPressL}>
            <Text style={{paddingBottom: 20, fontWeight: 'bold', fontSize: 15}}>Log Out? </Text>
            <Text style={{paddingBottom: 20}}>Are you sure you want to log out?</Text>
            <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Button
              style={{paddingTop: 10}}
              title="Cancel"
              onPress={onPressL}
              buttonStyle={{ backgroundColor: 'grey'}}
            />
            <View style={{padding: 10 }}></View>
            <Button
              style={{paddingTop: 10}}
              title="Log Out"
              onPress={!onPressL}
            />
            </View>
          </Overlay>
      </View>
    );
}

export default ProfileScreen;