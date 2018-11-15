import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default class card10 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 236,
    width: 185,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage1.jpg")}
        />
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button1}>
            <Icon
              style={styles.icon1}
              name="heart"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Icon
              style={styles.icon2}
              name="book"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <Icon
              style={styles.icon3}
              name="share"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flex: 1,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 180
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 8
  },
  button1: {
    padding: 8
  },
  icon1: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  },
  button2: {
    padding: 8
  },
  icon2: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  },
  button3: {
    padding: 8
  },
  icon3: {
    opacity: 0.5,
    color: "#000",
    fontSize: 24
  }
});
