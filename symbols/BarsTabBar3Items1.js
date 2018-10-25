import React, { Component } from "react";
import OverridesTabBarItem1 from "./OverridesTabBarItem1";
import OverridesTabBarItemActive1 from "./OverridesTabBarItemActive1";
import { View, StyleSheet } from "react-native";

export default class BarsTabBar3Items1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <OverridesTabBarItem1 style={styles.item3} />
        <OverridesTabBarItem1 style={styles.item2} />
        <OverridesTabBarItemActive1 style={styles.item1} />
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
