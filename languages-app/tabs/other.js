import { StyleSheet, Text, View } from 'react-native';

function OtherScreen() {
    return (
      <View style={styles.container}>
        <Text>Other!</Text>
      </View>
    );
}

export default OtherScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});