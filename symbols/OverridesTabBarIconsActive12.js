import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class OverridesTabBarIconsActive12 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 48,
    height: 34
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="0 0 27.05 25.50"
          preserveAspectRatio="none"
          style={styles.star2}
        >
          <Path
            strokeWidth={0}
            fill="rgba(244,211,94,1)"
            isClosed={true}
            d="M25.95 8.90 L18.05 8.90 C17.58 8.90 17.16 8.60 17.00 8.16 L14.57 0.75 C14.42 0.30 14.00 0.00 13.52 0.00 C13.05 0.00 12.63 0.30 12.48 0.75 L10.05 8.16 C9.89 8.60 9.47 8.90 9.00 8.90 L1.10 8.90 C0.63 8.89 0.21 9.19 0.06 9.63 C-0.09 10.08 0.06 10.57 0.45 10.84 L6.86 15.45 C7.24 15.72 7.40 16.21 7.25 16.65 L4.81 24.09 C4.71 24.42 4.77 24.78 4.97 25.06 C5.18 25.34 5.51 25.50 5.86 25.50 C6.09 25.50 6.32 25.42 6.51 25.28 L12.88 20.71 C13.26 20.43 13.79 20.43 14.17 20.71 L20.54 25.28 C20.73 25.42 20.96 25.50 21.19 25.50 C21.54 25.50 21.87 25.34 22.08 25.06 C22.28 24.78 22.34 24.42 22.24 24.09 L19.80 16.65 C19.65 16.21 19.81 15.72 20.19 15.45 L26.60 10.84 C26.99 10.57 27.14 10.08 26.99 9.63 C26.84 9.19 26.42 8.89 25.95 8.90 L25.95 8.90 Z"
          />
        </Svg>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  star2: {
    position: "absolute",
    height: 25.5,
    width: 27.05,
    top: "11.76%",
    left: "20.83%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
