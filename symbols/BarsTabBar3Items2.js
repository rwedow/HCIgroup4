import React, { Component } from "react";
import OverridesTabBarItem2 from "./OverridesTabBarItem2";
import OverridesTabBarItemActive2 from "./OverridesTabBarItemActive2";
import { View, StyleSheet } from "react-native";

export default class BarsTabBar3Items2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.bar} />
        <OverridesTabBarItem2 style={styles.item3} />
        <OverridesTabBarItem2 style={styles.item2} />
        <OverridesTabBarItemActive2 style={styles.item1} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  bar: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "rgba(13,59,102,0.9)"
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
