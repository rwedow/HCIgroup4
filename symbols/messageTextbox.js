import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class messageTextbox extends Component {
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
        <Text
          style={[
            styles.label,
            {
              color: this.props.error
                ? "red"
                : this.props.success ? "green" : "rgba(0,0,0,0.6)"
            }
          ]}
        >
          {this.props.label ? this.props.label : "Label"}
        </Text>
        <TextInput
          style={[
            styles.inputStyle,
            {
              borderBottomColor: this.props.error
                ? "red"
                : this.props.success ? "green" : "#D9D5DC"
            }
          ]}
          placeholder="Input"
        />
        {this.props.error ? (
          <Text
            style={[
              styles.helper1,
              {
                color: this.props.error ? "red" : "transparent"
              }
            ]}
          >
            Error message
          </Text>
        ) : null}
        {this.props.success ? (
          <Text
            style={[
              styles.helper2,
              {
                color: this.props.success ? "green" : "transparent"
              }
            ]}
          >
            Success message
          </Text>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent"
  },
  label: {
    paddingTop: 16,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left"
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
  helper1: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left"
  },
  helper2: {
    paddingTop: 8,
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left"
  }
});
