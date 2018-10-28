import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class OverridesTabBarIconsActive1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 34
  };
  render() {
    const { onPress} = this.props;
    return <View style={[styles.root, this.props.style]} 
    onPress={() => onPress()}/>;
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
