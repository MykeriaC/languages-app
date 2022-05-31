import { Text, View } from 'react-native';
import styles from '../style.js';
import { Avatar, Badge } from 'react-native-elements';

function ProfileScreen() {
    return (
      <View style={{paddingTop: 30, flex: 1, backgroundColor: '#3D83C6',alignItems:"center" }}>
        <Avatar
          size={64}
          rounded
          title='EX'
          containerStyle={{ backgroundColor: 'grey', alignContent: 'center' }}
        />
        <Text style={{paddingTop: 10}}>Name Here</Text>
        <Badge
          // badgeStyle={{}}
          containerStyle={{paddingTop: 10}}
          // onPress={() => {
          //   alert("onPress");
          // }}
          status="primary"
          // textProps={{}}
          textStyle={{ color: "#EFE" }}
          value="Beginner"
          // options={{}}
        />
      </View>
    );
}

export default ProfileScreen;