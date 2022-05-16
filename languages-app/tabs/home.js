import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3D83C6',
      alignItems: 'center',
      justifyContent: 'center',
    },
});