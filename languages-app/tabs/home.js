import { Text, View, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from '../style.js';

function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Welcome back</Text>
        {/* pass in name here */}
        <Text>User</Text>

        <Text> Select one of the following languages to get started: </Text>
        <TouchableOpacity>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              <Text>
                English
              </Text>
            </ListItem.Title>
          </ListItem.Content>
          <Avatar
            source={{
              uri: "https://www.linkpicture.com/q/Screen-Shot-2022-05-16-at-12.08.19-AM.png"
            }}
          />
          </ListItem>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen;