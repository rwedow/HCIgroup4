import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import SearchBar3 from "../symbols/searchBar3";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class AddItems extends Component {
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
        <FlatList
          style={styles.dAcaa2}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.eDJKwA}>
                <Text style={styles.Niojkc}>List Item</Text>
              </View>
            );
          }}
          ListHeaderComponent={({ highlighted }) => {
            return (
              <View style={styles.DZ8Qej}>
                <Text style={styles.xg0jAy}>List Header</Text>
              </View>
            );
          }}
          ListFooterComponent={({ highlighted }) => {
            return (
              <View style={styles.OZvBTo}>
                <Text style={styles.w4Cq1N}>List Footer</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={({}) => {
            return <View style={styles.l3qIpH} />;
          }}
        />
        <SearchBar3 style={styles.searchBar32} />
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
  dAcaa2: {
    height: 1,
    width: 1,
    top: 368.38,
    left: 121.51,
    position: "absolute"
  },
  eDJKwA: {
    backgroundColor: "#ffffff",
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  Niojkc: {
    color: "#000000"
  },
  DZ8Qej: {
    padding: 15,
    backgroundColor: "#ffffff"
  },
  xg0jAy: {
    color: "#999999",
    fontSize: 13
  },
  OZvBTo: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#999999"
  },
  w4Cq1N: {
    color: "#999999",
    fontSize: 14
  },
  l3qIpH: {
    backgroundColor: "#999999",
    left: 15,
    height: 2
  },
  searchBar32: {
    left: 6,
    position: "absolute",
    height: 44,
    width: 343,
    top: "11.74%"
  }
});
