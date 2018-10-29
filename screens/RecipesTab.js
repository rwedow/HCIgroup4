import React, { Component } from "react";

import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import Button101 from "../symbols/button101";
import Button16 from "../symbols/button16";
import Button17 from "../symbols/button17";

import { View, StyleSheet, Text } from "react-native";

export default class RecipesTab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect3}>
          <Svg
            style={styles.svg}
            viewBox="0 0 423.00 4.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={1}
              fill="rgba(0,0,0,1)"
              stroke="rgba(255,255,255,1)"
              isClosed={false}
              d="M1.01 1.50 L420.99 1.50 "
            />
          </Svg>
          <Text style={styles.text}>First Recipe</Text>
        </View>
        <View style={styles.rect4}>
          <Svg
            style={styles.svg2}
            viewBox="0 0 423.00 4.00"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={1}
              fill="rgba(0,0,0,1)"
              stroke="rgba(255,255,255,1)"
              isClosed={false}
              d="M1.01 1.50 L420.99 1.50 "
            />
          </Svg>
          <Text style={styles.text2}>Second Recipe</Text>
        </View>
        <Button101
          style={styles.button101}
          onPress={() => {
            this.props.navigation.push("ListsTab");
          }}
        />
        <Button16 style={styles.button16} />
        <Button17 style={styles.button17} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },

  rect3: {
    top: "8.55%",
    left: "0%",
    width: "101.6%",
    height: "6.9%",
    position: "absolute"
  },
  svg: {
    top: "95.10%",
    left: "-0.12%",
    width: "100.24%",
    height: "5.88%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text: {
    top: "0.00%",
    left: "4.28%",
    width: "90.26%",
    height: "78.43%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42,
    color: "rgba(106,106,106,1)"
  },
  rect4: {
    top: "16.34%",
    left: "0%",
    width: "101.6%",
    height: "6.9%",
    position: "absolute"
  },
  svg2: {
    top: "95.10%",
    left: "-0.12%",
    width: "100.24%",
    height: "5.88%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text2: {
    top: "0.00%",
    left: "4.28%",
    width: "90.26%",
    height: "78.43%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42,
    color: "rgba(106,106,106,1)"
  },
  button101: {
    top: 0,
    position: "absolute",
    height: 50,
    width: 180,
    left: "0%"
  },
  button16: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 49,
    width: 179
  },
  button17: {
    top: 0,
    left: 182.5,
    position: "absolute",
    height: 49,
    width: 177.5
  }
});
