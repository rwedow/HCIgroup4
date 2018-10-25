import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class helperTextBox extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 90,
    width: 375,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>StackedLabel</Text>
        <TextInput style={styles.inputStyle} placeholder="Input" />
        <Text style={styles.helper}>Helper text</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent"
  },
  label: {
    opacity: 0.6,
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
    color: "#000"
  },
  inputStyle: {
    width: "100%",
    alignSelf: "flex-start",
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  helper: {
    opacity: 0.6,
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
    color: "#000"
  }
});
