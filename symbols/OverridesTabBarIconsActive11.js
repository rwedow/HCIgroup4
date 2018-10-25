import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class OverridesTabBarIconsActive11 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 34
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
