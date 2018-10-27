import React, { Component } from "react";
import BarsTabBar3Items2 from "../symbols/BarsTabBar3Items2";
import { Svg, Path } from "react-native-svg";

import { Center } from "@builderx/utils";

import Button6 from "../symbols/button6";
import { View, Text, StyleSheet } from "react-native";

export default class ListContents extends Component {
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
        <View style={styles.secondItem}>
          <View style={styles.group1}>
            <Svg
              viewBox="0 0 416.00 4.00"
              preserveAspectRatio="none"
              style={styles.line4}
            >
              <Path
                strokeWidth={1}
                fill="rgba(0,0,0,1)"
                stroke="rgba(255,255,255,1)"
                isClosed={false}
                d="M1.00 1.50 L414.00 1.50 "
              />
            </Svg>
            <Text style={styles.yogurt}>Cream cheese</Text>
          </View>
        </View>
        <Button6
          style={styles.rect6}
          onPress={() => {
            this.props.navigation.push("AddItems");
          }}
        />
        <View style={styles.rect8}>
          <View style={styles.rect9}>
            <Text style={styles.svg}>Bagels</Text>
          </View>
        </View>
        <View style={styles.text4}>
          <View style={styles.Ge2xYl}>
            <Svg
              style={styles.ribdUl}
              viewBox="0 0 416.00 4.00"
              preserveAspectRatio="none"
            >
              <Path
                strokeWidth={1}
                fill="rgba(0,0,0,1)"
                stroke="rgba(255,255,255,1)"
                isClosed={false}
                d="M1.00 1.50 C414.00 1.50 414.00 1.50 414.00 1.50 "
              />
            </Svg>
            <Text style={styles.ukv2ns}>Yogurt</Text>
          </View>
        </View>
        <Text style={styles.FmAECu}>Walmart</Text>
        <Text style={styles.text5}>Publix </Text>
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
    top: "19.36%",
    left: "-0.83%",
    height: "7.2%",
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
    top: "53.16%",
    left: "-1.67%",
    height: 44,
    width: 366
  },
  group1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%"
  },
  line4: {
    position: "absolute",
    height: "5.88%",
    width: "100.24%",
    top: "95.10%",
    left: "-0.12%",
    backgroundColor: "transparent",
    borderColor: "transparent"
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
    left: "51.39%",
    position: "absolute",
    height: 44,
    width: 163,
    top: "91.24%"
  },
  rect8: {
    top: "46.12%",
    left: "-0.56%",
    width: "100.28%",
    height: "7.36%",
    position: "absolute"
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
    top: 164.71,
    left: "-0.56%",
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
  ribdUl: {
    top: "95.10%",
    left: "-0.12%",
    width: "100.24%",
    height: "5.88%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
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
  FmAECu: {
    top: 73.71,
    left: "2.78%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Futura-Medium",
    color: "rgba(244,211,94,1)"
  },
  text5: {
    top: 243.71,
    left: "2.78%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Futura-Medium",
    color: "rgba(244,211,94,1)"
  }
});
