import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class button121 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 36,
    width: 100,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    const { onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={() => onPress()}
      >
        <Text style={styles.buttonContent}>NEXT</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F44336",
    paddingRight: 16,
    paddingLeft: 16,
    minWidth: 88,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  buttonContent: {
    fontSize: 25,
    fontWeight: "200",
    color: "#fff",
    fontFamily: "Futura-Medium"
  }
});
