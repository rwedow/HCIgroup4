import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class IPhone8 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.addItems}>Add items:</Text>
        <TextInput id="searchInput" placeholder="TextInput" style={styles.textInput} />
        <View style={styles.group}>
        {/* iterate the results here */}
          <Text style={styles.searchResults}>Annie’s Tomato Soup</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
  addItems: {
    position: "absolute",
    top: "3.13%",
    left: "2.64%",
    height: "10.94%",
    width: "83.06%",
    color: "rgba(249,87,56,1)",
    fontSize: 42,
    fontFamily: "Futura-Medium",
    letterSpacing: 2.44
  },
  group: {
    position: "absolute",
    top: "22.19%",
    height: "6.88%",
    width: 366,
    left: "2.78%"
  },
  searchResults: {
    height: "78.43%",
    width: "90.26%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  textInput: {
    height: 41,
    width: 317,
    top: 90,
    position: "absolute",
    borderWidth: 5,
    borderColor: "rgba(255,252,252,1)",
    left: "2.78%"
  },
});


// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

// export default class ListsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Lists',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         {/* Go ahead and delete ExpoLinksView and replace it with your
//            * content, we just wanted to provide you with some helpful links */}
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#FAF0CA',
//   },
// });
