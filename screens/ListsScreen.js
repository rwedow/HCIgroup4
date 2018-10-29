import React, { Component } from "react";
import { TabView, TabContent } from "@builderx/tab-view";
import { Svg, Path } from "react-native-svg";
import Button10 from "../symbols/button10";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";

export default class ListsScreen extends React.Component {
  render() {

    var groceryLists = ['Baking List', 'Grill List'];
    var listsArr = groceryLists.map(function(list, index){
      return <View style={styles.singleList} key={index}>
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
        <Text style={styles.text}>{list}</Text>
      </View>;
    })

    return (
      <View style={styles.root}>
        <TabView
          style={styles.tab}
          tabStyle={styles.tab_tabStyle}
          tabIndicatorStyle={styles.tab_tabIndicatorStyle}
          tabLabelStyle={styles.tab_tabLabelStyle}
          tabBarStyle={styles.tab_tabBarStyle}
          activeTabIndex={0}
        >
          <TabContent title="Lists">
            <View style={styles.navItem} 
            onPress={() => {
            activeTabIndex=1;
          }}/>
          </TabContent>
          <TabContent title="Recipes">
            <View style={styles.navItem} />
          </TabContent>
        </TabView>

        <Center horizontal>
          <Button10
            style={styles.button10}
            onPress={() => {
              this.props.navigation.push("NameList");
            }}
          />
        </Center>
        
        { listsArr }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
  tab: {
    top: 0,
    left: 0,
    width: 375,
    height: 54,
    position: "absolute",
    backgroundColor: "rgba(250,240,202,1)",
    opacity: 1
  },
  tab_tabStyle: {},
  tab_tabIndicatorStyle: {
    elevation: 3,
    backgroundColor: "rgba(250,240,202,1)",
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  tab_tabLabelStyle: {
    fontSize: 20,
    fontFamily: "Futura-Medium"
  },
  tab_tabBarStyle: {
    backgroundColor: "rgba(238,150,75,1)",
    opacity: 1
  },
  navItem: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  singleList: {
    top: "9.55%",
    left: "0%",
    width: "101.6%",
    height: "8.4%"
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
  button10: {
    top: 588.63,
    left: 245.5,
    position: "absolute",
    height: 36,
  },
  button124: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 49,
    width: 180
  },
  button15: {
    top: 0,
    position: "absolute",
    height: 49,
    width: 177.5,
    right: 0
  }
});
