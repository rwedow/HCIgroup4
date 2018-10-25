import React, { Component } from "react";
import { TabView, TabContent } from "@builderx/tab-view";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";

export default class Untitled1 extends Component {
// const ListsScreen = React.createClass({
  render() {
    return (
      <View style={styles.root}>
        {/* <BarsTabBar3Items2 style={styles.barsTabBar3Items} /> */}
        <TabView
          style={styles.tab}
          tabStyle={styles.tab_tabStyle}
          tabIndicatorStyle={styles.tab_tabIndicatorStyle}
          tabLabelStyle={styles.tab_tabLabelStyle}
          tabBarStyle={styles.tab_tabBarStyle}
          activeTabIndex={0}
        >
          <TabContent title="Lists">
            <View style={styles.rect} />
          </TabContent>
          <TabContent title="Recipes">
            <View style={styles.rect2} />
          </TabContent>
        </TabView>
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
          <Text style={styles.text}>First Grocery List</Text>
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
          <Text style={styles.text2}>Second Grocery List</Text>
        </View>
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
  rect: {
    flex: 1,
    backgroundColor: "#eeeeee"
  },
  rect2: {
    flex: 1,
    backgroundColor: "#eeeeee"
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
  }
});



// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

// export default class ListsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Lists',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         {/* Go ahead and delete ExpoLinksView and replace it with your
//            * content, we just wanted to provide you with some helpful links */}
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#FAF0CA',
//   },
// });
