import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from '../style.js';

function HomeScreen ( {navigation} ){
  const languages = [
    {
    id: "1",
    language: "English",
    image: "https://www.linkpicture.com/q/Screen-Shot-2022-05-16-at-4.06.04-AM.png"
  },
  {
    id: "2",
    language: "Spanish",
    image: "https://www.linkpicture.com/q/Unknown-copy.png"
  },
  {
    id: "3",
    language: "Italian",
    image: "https://www.linkpicture.com/q/Flag_of_Italy.svg.png"
  },
  {
    id: "4",
    language: "Mandarin",
    image: "https://www.linkpicture.com/q/Screen-Shot-2022-05-16-at-12.15.23-AM.png"
  }
  ];

  let renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.list} 
      onPress = {() => {navigation.navigate('Activities', {
        id: item.id,
        language: item.language
      });}}
    >
      <ListItem>
        <Avatar
          containerStyle={{ justifyContent: "left"}}
          rounded
          size="medium"
          source={{ uri: item.image }}
        />
        <ListItem.Title>
          {item.language}
        </ListItem.Title>
      </ListItem>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
        {/* pass in name here */}
        <Text style={styles.title}>Welcome back, User</Text>
        <FlatList
          data={languages}
          renderItem={renderItem}
          ItemSeparatorComponent={()=>(<View style={{paddingBottom: 20}}></View>)}
        />
    </View>
  );
}


export default HomeScreen;