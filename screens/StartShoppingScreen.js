import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import BarsTabBar3Items2 from "../symbols/BarsTabBar3Items2";
import { Center } from "@builderx/utils";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class StartShopping extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => {
            this.props.navigation.push("PreferencesForm");
          }}
        >
          <Svg
            viewBox="0 0 345.00 345.00"
            preserveAspectRatio="none"
            style={styles.oval}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,127,102,1)"
              isClosed={true}
              d="M172.50 345.00 C267.75 345.00 345.00 267.75 345.00 172.50 C345.00 77.25 267.75 0.00 172.50 0.00 C77.25 0.00 0.00 77.25 0.00 172.50 C0.00 267.75 77.25 345.00 172.50 345.00 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 319.00 319.00"
            preserveAspectRatio="none"
            style={styles.oval2}
          >
            <Path
              strokeWidth={0}
              fill="rgba(249,87,56,1)"
              isClosed={true}
              d="M159.50 319.00 C247.58 319.00 319.00 247.58 319.00 159.50 C319.00 71.42 247.58 0.00 159.50 0.00 C71.42 0.00 0.00 71.42 0.00 159.50 C0.00 247.58 71.42 319.00 159.50 319.00 Z"
            />
          </Svg>
          <Center horizontal>
            <Text style={styles.text}>Start Shopping!</Text>
          </Center>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
  startButton: {
    position: "absolute",
    top: "26.63%",
    left: "11.45%",
    height: "50.88%",
    width: "78.33%"
  },
  oval: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval2: {
    position: "absolute",
    height: "92.46%",
    width: "92.46%",
    top: "3.77%",
    left: "3.77%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text: {
    position: "absolute",
    height: 159,
    width: 266,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(250,240,202,1)",
    fontSize: 55,
    fontFamily: "Futura-Medium",
    display: "flex",
    left: 15,
    top: 45
  }
  
});
