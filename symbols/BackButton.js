import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text } from "react-native";

export default class BackButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 58,
    height: 58
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.backButton}>
          <Svg
            viewBox="0 0 58.00 58.00"
            preserveAspectRatio="none"
            style={styles.oval}
          >
            <Path
              strokeWidth={0}
              fill="rgba(249,87,56,1)"
              isClosed={true}
              d="M29.00 58.00 C45.01 58.00 58.00 45.01 58.00 29.00 C58.00 12.99 45.01 0.00 29.00 0.00 C12.99 0.00 0.00 12.99 0.00 29.00 C0.00 45.01 12.99 58.00 29.00 58.00 Z"
            />
          </Svg>
        </View>
        <Center>
          <Text style={styles.text}>Back</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  backButton: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    transform: [
      {
        scaleX: -1
      }
    ]
  },
  oval: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    color: "rgba(255,255,255,1)",
    fontFamily: "Futura-Medium"
  }
});
