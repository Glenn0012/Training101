import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  Platform,
  } from 'react-native';

export default function App() {
  return (

      <View style={{ flexDirection: "row",
      backgroundColor: 'white',
      flex: 1, justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',  
         }}>
      <View style={{ backgroundColor: 'blue', width: 100, height: 100,  }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'pink', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'gray', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'black', width: 100, height: 100 }} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
//   // },
// });
