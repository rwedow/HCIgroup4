import React, { Component } from "react";
import BarsTabBar3Items2 from "../symbols/BarsTabBar3Items2";
import { Svg, Path } from "react-native-svg";

import { Center } from "@builderx/utils";

import Button6 from "../symbols/button6";
import Checkbox2 from "../symbols/checkbox2";
import { View, Text, StyleSheet } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rectangle} />
        <View style={styles.topBar}>
          <Text style={styles.listName}>List Name</Text>
          <View style={styles.group6}>
            <View style={styles.rectangle1} />
            <Text style={styles.optimize}>OPTIMIZE</Text>
          </View>
        </View>
        <Svg
          viewBox="0 0 423.00 4.00"
          preserveAspectRatio="none"
          style={styles.line}
        >
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,1)"
            stroke="rgba(255,255,255,1)"
            isClosed={false}
            d="M1.01 1.50 L420.99 1.50 "
          />
        </Svg>
        <View style={styles.firstItem}>
          <View style={styles.group}>
            <Text style={styles.apples}>Apples</Text>
          </View>
        </View>
        <Center horizontal>
          <View style={styles.secondItem}>
            <View style={styles.group1}>
              <Text style={styles.yogurt}>Cream cheese</Text>
            </View>
          </View>
        </Center>
        <Button6
          style={styles.rect6}
          onPress={() => {
            this.props.navigation.push("ListsScreen");
          }}
        />
        <View style={styles.rect8}>
          <View style={styles.rect9}>
            <Text style={styles.svg}>Bagels</Text>
          </View>
        </View>
        <View style={styles.text4}>
          <View style={styles.Ge2xYl}>
            <Text style={styles.ukv2ns}>Yogurt</Text>
          </View>
        </View>
        <Checkbox2 style={styles.checkbox2} />
        <Checkbox2 style={styles.checkbox22} />
        <Checkbox2 style={styles.checkbox23} />
        <Checkbox2 style={styles.checkbox24} />
        <Checkbox2 style={styles.checkbox25} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
  barsTabBar3Items: {
    position: "absolute",
    top: "92.26%",
    left: "0.00%",
    height: "7.74%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  rectangle: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "6.93%",
    width: "100.72%",
    backgroundColor: "rgba(238,150,75,1)"
  },
  topBar: {
    position: "absolute",
    top: "0.14%",
    left: "3.38%",
    height: "6.79%",
    width: "96.38%"
  },
  listName: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  group6: {
    position: "absolute",
    top: "18.18%",
    left: "67.41%",
    height: "54.55%",
    width: "30.86%"
  },
  rectangle1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 13.5,
    backgroundColor: "rgba(244,211,94,1)"
  },
  optimize: {
    position: "absolute",
    top: "11.11%",
    left: "6.54%",
    height: "74.07%",
    width: "90.65%",
    color: "rgba(13,59,102,1)",
    lineHeight: 20,
    fontSize: 17,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.86
  },
  line: {
    position: "absolute",
    height: "0.41%",
    width: "101.93%",
    top: "6.73%",
    left: "-1.09%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  firstItem: {
    position: "absolute",
    top: "13.3%",
    left: "-2.78%",
    height: "7.36%",
    width: "100%"
  },
  group: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },

  apples: {
    position: "absolute",
    top: "0.00%",
    left: "17.39%",
    height: "78.43%",
    width: "77.05%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },

  secondItem: {
    position: "absolute",

    height: 44,
    width: 366,
    top: "35.37%"
  },
  group1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },

  yogurt: {
    position: "absolute",
    top: "0.00%",
    left: "16.67%",
    height: "78.43%",
    width: "77.78%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },

  rect6: {
    left: "64.73%",
    position: "absolute",
    height: 46,
    width: 115.98,
    top: "91.39%"
  },
  rect8: {
    left: "-0.28%",
    width: "100.28%",
    height: 47,
    position: "absolute",
    top: "28.01%"
  },
  rect9: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  svg: {
    top: "0%",
    left: "16.1%",
    width: "77.01%",
    height: "77.27%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42,
    color: "rgba(106,106,106,1)"
  },
  text4: {
    top: 132,
    left: "-0.83%",
    width: "100.28%",
    height: "7.36%",
    position: "absolute"
  },
  Ge2xYl: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },

  ukv2ns: {
    top: "0.00%",
    left: "16.67%",
    width: "77.78%",
    height: "78.43%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42,
    color: "rgba(106,106,106,1)"
  },
  checkbox2: {
    top: 85,
    left: 11,
    position: "absolute"
  },
  checkbox22: {
    top: 132,
    left: 11,
    position: "absolute"
  },
  checkbox23: {
    top: 85,
    left: 11,
    position: "absolute"
  },
  checkbox24: {
    top: 179,
    left: 11,
    position: "absolute"
  },
  checkbox25: {
    top: 226,
    left: 11,
    position: "absolute"
  }
});
