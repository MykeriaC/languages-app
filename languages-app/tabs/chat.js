import { StyleSheet, Text, View } from 'react-native';

function ChatScreen() {
    return (
      <View style={styles.container}>
        <Text>Chat!</Text>
      </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3D83C6',
      alignItems: 'center',
      justifyContent: 'center',
    },
});