import React, { Component } from "react";
import OverridesTabBarIconsActive11 from "./OverridesTabBarIconsActive11";
import { View, Text, StyleSheet } from "react-native";

export default class OverridesTabBarItemActive1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.lists1}>Lists</Text>
        <OverridesTabBarIconsActive11 style={styles.activeIcon} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  lists1: {
    position: "absolute",
    top: "72.45%",
    left: "0.00%",
    height: "27.14%",
    width: "100.00%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(244,211,94,1)",
    fontSize: 10,
    fontFamily: "Futura-Medium",
    letterSpacing: 0.12
  },
  activeIcon: {
    position: "absolute",
    top: "2.04%",
    left: "0.00%",
    height: 34,
    width: 48,
    backgroundColor: "transparent"
  }
});
