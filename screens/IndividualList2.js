import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import Button6 from "../symbols/button6";
import Checkbox2 from "../symbols/checkbox2";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default class Untitled extends Component {
  render() {

    var listItems = ['Tomato Soup', 'Salsa', 'Potatoes', 'Cheese', 'Eggs', 'Apples', 'Frozen Peas', 'Carrots', 'Lemons', 'Barbeque Sauce', 'Limes', 'Blueberries', 'Sweet Potatoes', 'Cherries', 'Tortillas'];

    var itemsArr = listItems.map(function(item, index){
      return <View style={styles.resultItem} key={index}>
      <Checkbox2 style={styles.checkbox} />
      <Svg
        style={styles.line}
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
      <Text style={styles.resultText}>{ item }</Text>
    </View>;
    })

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

          <ScrollView contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
          }}>
            { itemsArr }
          </ScrollView>

          <Button6
            style={styles.rect6}
            onPress={() => {
              this.props.navigation.pop();
              this.props.navigation.pop();
              this.props.navigation.pop();
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
  line: {
    position: "absolute",
    height: "5.88%",
    width: "100.24%",
    top: "95.10%",
    left: "-0.12%",
    backgroundColor: "transparent", 
    borderColor: "transparent"
  },
  resultsGroup: {
    flex: 1,
    justifyContent: 'space-between'
  },
  resultItem: {
    top: "9.52%",
    left: "10.00%",
    height: "8.93%",
    width: "101.69%"
  },
  resultText: {
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
  checkbox: {
    top: "7%",
    left: "-8%",
    position: "absolute"
  },
  rect6: {
    left: "64.73%",
    position: "absolute",
    height: 46,
    width: 115.98,
    top: "91.39%"
  },
});
