import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D83C6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  title: {
    fontSize: 35,
    color: "white",
    paddingBottom: 20
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    paddingBottom: 20
  },
  list: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  chat: {
    textAlign: 'center',
    // backgroundColor: '#282c34',
    // minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    height: 30,
    margin: 10,
    paddingLeft: 15,
    borderColor: 'purple',
    width: 300
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});