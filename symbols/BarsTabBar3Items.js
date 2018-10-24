import React, { Component } from "react";
import OverridesTabBarItem from "./OverridesTabBarItem";
import OverridesTabBarItemActive from "./OverridesTabBarItemActive";
import { View, StyleSheet } from "react-native";

export default class BarsTabBar3Items extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <OverridesTabBarItem style={styles.item3} />
        <OverridesTabBarItem style={styles.item2} />
        <OverridesTabBarItemActive style={styles.item1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  item3: {
    position: "absolute",
    top: "0.00%",
    left: "77.07%",
    height: 49,
    width: 48,
    backgroundColor: "transparent"
  },
  item2: {
    position: "absolute",
    top: "0.00%",
    left: "43.60%",
    height: 49,
    width: 48,
    backgroundColor: "transparent"
  },
  item1: {
    position: "absolute",
    top: "0.00%",
    left: "10.13%",
    height: 49,
    width: 48,
    backgroundColor: "transparent"
  }
});
