import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default class searchBar1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 44,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon
            style={styles.leftIcon}
            name="subdirectory-arrow-right"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <Icon
            style={styles.inputLeftIcon}
            name="magnify"
            type="MaterialCommunityIcons"
          />
          <TextInput style={styles.inputStyle} placeholder="Search" />
          <Icon
            style={styles.inputRightIcon}
            name="close-circle"
            type="MaterialCommunityIcons"
          />
        </View>
        <TouchableOpacity style={styles.rightIconButton}>
          <Icon
            style={styles.rightIcon}
            name="upload"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFF4",
    padding: 8
  },
  leftIconButton: {
    padding: 8
  },
  leftIcon: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#CECED2",
    borderRadius: 5
  },
  inputLeftIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#000",
    fontSize: 20
  },
  inputStyle: {
    height: 32,
    flex: 1,
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "Futura",
    lineHeight: 15,
    color: "#000"
  },
  inputRightIcon: {
    alignSelf: "center",
    paddingRight: 5,
    paddingLeft: 5,
    color: "#000",
    fontSize: 20
  },
  rightIconButton: {
    alignItems: "center",
    padding: 8
  },
  rightIcon: {
    backgroundColor: "transparent",
    opacity: 0.6,
    color: "#007AFF",
    fontSize: 24
  }
});
