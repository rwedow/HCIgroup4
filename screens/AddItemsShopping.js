import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import SearchBar3 from "../symbols/searchBar3";
import Button121 from "../symbols/button121";
import { View, Text, StyleSheet } from "react-native";

export default class AddItemsShopping extends Component {
  render() {
    return (
      <View style={styles.root}>
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
        <View style={styles.group}>
          <Svg
            viewBox="0 0 423.00 4.00"
            preserveAspectRatio="none"
            style={styles.line2}
          >
            <Path
              strokeWidth={1}
              fill="rgba(0,0,0,1)"
              stroke="rgba(255,255,255,1)"
              isClosed={false}
              d="M1.01 1.50 L420.99 1.50 "
            />
          </Svg>
          <Text style={styles.anniesTomatoSoup}>Annie’s Tomato Soup</Text>
        </View>
        <View style={styles.group1}>
          <Svg
            viewBox="0 0 423.00 4.00"
            preserveAspectRatio="none"
            style={styles.line4}
          >
            <Path
              strokeWidth={1}
              fill="rgba(0,0,0,1)"
              stroke="rgba(255,255,255,1)"
              isClosed={false}
              d="M1.01 1.50 L420.99 1.50 "
            />
          </Svg>
          <Text style={styles.anniesTomatoBisqu}>Annie’s Tomato Bisque</Text>
        </View>
        <Text style={styles.text3}>Add Items</Text>
        <SearchBar3 style={styles.searchBar32} />
        <Button121
          style={styles.button121}
          onPress={() => {
            this.props.navigation.push("IndividualListScreen");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
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
  line3: {
    position: "absolute",
    height: "8.62%",
    width: "77.59%",
    top: "46.55%",
    left: "8.62%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        scaleX: -1
      }
    ]
  },
  line: {
    position: "absolute",
    height: "0.41%",
    width: "101.93%",
    top: "19.77%",
    left: "-2.05%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group: {
    position: "absolute",
    top: "21.06%",
    left: 0,
    height: "6.93%",
    width: "101.66%"
  },
  line2: {
    position: "absolute",
    height: "5.88%",
    width: "100.24%",
    top: "95.10%",
    left: "-0.12%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  anniesTomatoSoup: {
    position: "absolute",
    top: "0.00%",
    left: "4.28%",
    height: "78.43%",
    width: "90.26%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  group1: {
    position: "absolute",
    top: "29.08%",
    left: 0,
    height: "6.93%",
    width: "101.66%"
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
  anniesTomatoBisqu: {
    position: "absolute",
    top: "0.00%",
    left: "4.28%",
    height: "78.43%",
    width: "90.26%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },

  text3: {
    top: "2.5%",
    width: 236,
    height: "9.23%",
    position: "absolute",
    fontSize: 42,
    fontFamily: "Futura-Medium",
    letterSpacing: 2.44,
    color: "rgba(249,87,56,1)",
    left: "20.22%"
  },

  searchBar32: {
    left: 6,
    position: "absolute",
    height: 44,
    width: 343,
    top: "11.74%"
  },
  button121: {
    top: 589,
    left: 253,
    height: 36,
    position: "absolute"
  }
});
