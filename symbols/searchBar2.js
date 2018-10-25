import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default class searchBar2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon
              style={styles.leftIcon}
              name="arrow-left"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TextInput
            style={styles.inputStyle}
            placeholder="Search"
            placeholderTextColor="#ffffff"
          />
          <TouchableOpacity style={styles.rightIconButton}>
            <Icon
              style={styles.rightIcon}
              name="close"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  rect1: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  inputStyle: {
    top: 4,
    left: 72,
    width: "70%",
    height: 48,
    position: "absolute",
    alignSelf: "flex-start",
    paddingRight: 5,
    fontSize: 16,
    fontFamily: "Futura",
    lineHeight: 16,
    color: "#FFFFFF"
  },
  rightIconButton: {
    top: 5,
    right: 5,
    position: "absolute",
    alignItems: "center",
    padding: 11
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});
