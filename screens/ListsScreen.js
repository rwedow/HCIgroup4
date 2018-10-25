import React, { Component } from "react";
// import BarsTabBar3Items2 from "../symbols/BarsTabBar3Items2";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default class IPhone820 extends Component {
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
          <View style={styles.rectangle} />
          <Text style={styles.recipes}>Recipes</Text>
        </View>
        <View style={styles.group1}>
          <View style={styles.rectangle1} />
          <Text style={styles.coupons}>Coupons</Text>
        </View>
        <View style={styles.resultsGroup}>
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
          <Text style={styles.tomatoSoup}>Tomato Soup</Text>
        </View>
        <View style={styles.group3}>
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
          <Text style={styles.tacoSoup}>Taco Soup</Text>
          <View style={styles.group4}>
            <Svg
              viewBox="0 0 423.00 4.00"
              preserveAspectRatio="none"
              style={styles.line6}
            >
              <Path
                strokeWidth={1}
                fill="rgba(0,0,0,1)"
                stroke="rgba(255,255,255,1)"
                isClosed={false}
                d="M1.01 1.50 L420.99 1.50 "
              />
            </Svg>
            <Text style={styles.fermentedSalsa}>Fermented Salsa</Text>
          </View>
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
  line: {
    position: "absolute",
    height: "0.41%",
    width: "101.93%",
    top: "19.23%",
    left: "-0.36%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  group: {
    position: "absolute",
    top: "2.45%",
    left: "9.66%",
    height: "5.57%",
    width: "33.57%"
  },
  rectangle: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 20.5,
    backgroundColor: "rgba(238,150,75,1)"
  },
  recipes: {
    position: "absolute",
    top: "0.00%",
    left: "10.07%",
    height: "87.80%",
    width: "79.86%",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  coupons: {
    position: "absolute",
    top: "0.00%",
    left: "10.24%",
    height: "87.80%",
    width: "80.12%",
    color: "rgba(167,167,167,1)",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  group1: {
    position: "absolute",
    top: "2.45%",
    left: "50.48%",
    height: "5.57%",
    width: "40.10%",
    opacity: 0.63
  },
  rectangle1: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderRadius: 20.5,
    backgroundColor: "rgba(204,204,204,1)"
  },
  resultsGroup: {
    position: "absolute",
    top: "20.52%",
    left: "0.00%",
    height: "6.93%",
    width: "101.69%"
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
  tomatoSoup: {
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
  group3: {
    position: "absolute",
    top: "28.53%",
    left: "0.00%",
    height: "15.08%",
    width: "101.69%"
  },
  line4: {
    position: "absolute",
    height: "2.70%",
    width: "100.24%",
    top: "43.69%",
    left: "-0.12%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  tacoSoup: {
    position: "absolute",
    top: "0.00%",
    left: "4.28%",
    height: "36.04%",
    width: "90.26%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  group4: {
    position: "absolute",
    top: "54.05%",
    left: "0.00%",
    height: "45.95%",
    width: "100.00%"
  },
  line6: {
    position: "absolute",
    height: "5.88%",
    width: "100.24%",
    top: "95.10%",
    left: "-0.12%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  fermentedSalsa: {
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
