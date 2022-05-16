import { StyleSheet, Text, View } from 'react-native';

function ActivityScreen() {
    return (
      <View style={styles.container}>
        <Text>Activity!</Text>
      </View>
    );
}

export default ActivityScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});