import { StyleSheet, Text, View } from 'react-native';

function ProfileScreen() {
    return (
      <View style={styles.container}>
        <Text>Profile!</Text>
      </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});