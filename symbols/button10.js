import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button10 extends Component {
  // Only for displaying symbol in BuilderX.
  /*static containerStyle = {
    height: 44,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };*/
  render() {
    const { text, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress={() => onPress()}>
        <Text style={styles.buttonContent}>Add List</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 5
  },
  buttonContent: {
    fontSize: 33,
    fontWeight: "500",
    color: "rgba(232,156,90,1)",
    fontFamily: "Futura-Medium"
  }
});
