import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Button12 from "../symbols/button12";
import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class NameList extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.nameYourList}>Name your list:</Text>
        </Center>
        <Center horizontal>
          <TextInput placeholder="List Name" style={styles.textInput} />
        </Center>
        <Button12 style={styles.button12} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },

  nameYourList: {
    position: "absolute",
    top: "2.5%",
    height: "10.8%",
    width: 331,
    color: "rgba(249,87,56,1)",
    fontSize: 42,
    fontFamily: "Futura-Medium",
    letterSpacing: 2.44
  },

  textInput: {
    height: 60,
    width: 298,
    top: 85,

    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 40,
    borderColor: "#000000",
    borderWidth: 0,
    fontSize: 20,
    textAlign: "center"
  },
  button12: {
    top: 543.89,
    left: 14,
    position: "absolute",
    height: 36
  }
});
