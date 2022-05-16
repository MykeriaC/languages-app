import { Text, View } from 'react-native';
import styles from '../style.js';

function ActivityScreen({route}) {
  const { language } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language}</Text>
      <Text>Activity!</Text>
    </View>
  );
}

export default ActivityScreen;