import React, { Component } from "react";
import OverridesTabBarIconsUnselected11 from "./OverridesTabBarIconsUnselected11";
import { View, Text, StyleSheet } from "react-native";

export default class OverridesTabBarItem1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.lists}>Lists</Text>
        <OverridesTabBarIconsUnselected11 style={styles.icon} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  lists: {
    position: "absolute",
    top: "72.45%",
    left: "0.00%",
    height: "27.14%",
    width: "100.00%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(142,142,147,1)",
    fontSize: 10,
    fontFamily: "Futura-Medium",
    letterSpacing: 0.12
  },
  icon: {
    position: "absolute",
    top: "4.08%",
    left: "0.00%",
    height: 34,
    width: 48,
    backgroundColor: "transparent"
  }
});
