import { StyleSheet, Text, View } from 'react-native';

function TranslateScreen() {
    return (
      <View style={styles.container}>
        <Text>Translate!</Text>
      </View>
    );
}

export default TranslateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3D83C6',
      alignItems: 'center',
      justifyContent: 'center',
    },
});