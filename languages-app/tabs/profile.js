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
      backgroundColor: '#3D83C6',
      alignItems: 'center',
      justifyContent: 'center',
    },
});