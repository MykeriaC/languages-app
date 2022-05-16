import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import styles from '../style.js';

function HomeScreen ( {navigation} ){
  // our Date object
  var today = new Date();
  let nameOfDay, nameOfMonth;
  // returns the day of the week were one
  let day = today.getDay();
  // returns the day of the month it is (1-31)
  let date = today.getDate();
  // returns the month (1-12)
  let month = today.getMonth() + 1;

  // switch statements to align the value for day with a day of the week
  switch(day){
    case 0: 
        nameOfDay = 'Sunday';
        break;
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;
}

// switch statement to set the month value to an actual month
switch(month){
  case 1:
    nameOfMonth = 'January';
    break;
  case 2:
    nameOfMonth = 'February';
    break;
  case 3:
    nameOfMonth = 'March';
    break;
  case 4:
    nameOfMonth = 'April';
    break;
  case 5:
    nameOfMonth = 'May';
    break;
  case 6:
    nameOfMonth = 'June';
    break;
  case 7:
    nameOfMonth = 'July';
    break;
  case 8:
    nameOfMonth = 'August';
    break;
  case 9:
    nameOfMonth = 'September';
    break;
  case 10:
    nameOfMonth = 'October';
    break;
  case 11:
    nameOfMonth = 'November';
    break;
  case 12:
    nameOfMonth = 'December';
    break;
}

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
        <Text style={styles.title}>{nameOfDay}</Text>
        <Text style={styles.title}>{nameOfMonth} {date}</Text>
        <Text style={styles.subtitle}>Select a Language to Get Started:</Text>
        <FlatList
          data={languages}
          renderItem={renderItem}
          ItemSeparatorComponent={()=>(<View style={{paddingBottom: 20}}></View>)}
        />
    </View>
  );
}


export default HomeScreen;