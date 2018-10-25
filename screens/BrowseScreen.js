import React, { Component } from "react";
import { TabView, TabContent } from "@builderx/tab-view";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";

export default class BrowseScreen extends Component {
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
            <View style={styles.navItem} />
          </TabContent>
          <TabContent title="Recipes">
            <View style={styles.navItem} />
          </TabContent>
        </TabView>
        
        {/* iterate through these */}
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
  }
});

// import React, { Component } from "react";
// import { Svg, Path } from "react-native-svg";
// import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";

// export default class IPhone814 extends Component {
//   render() {
//     return (
//       <View style={styles.root}>
//         <Svg
//           viewBox="0 0 423.00 4.00"
//           preserveAspectRatio="none"
//           style={styles.line}
//         >
//           <Path
//             strokeWidth={1}
//             fill="rgba(0,0,0,1)"
//             stroke="rgba(255,255,255,1)"
//             isClosed={false}
//             d="M1.01 1.50 L420.99 1.50 "
//           />
//         </Svg>
//         <View style={styles.group}>
//           <Svg
//             viewBox="0 0 423.00 4.00"
//             preserveAspectRatio="none"
//             style={styles.line2}
//           >
//             <Path
//               strokeWidth={1}
//               fill="rgba(0,0,0,1)"
//               stroke="rgba(255,255,255,1)"
//               isClosed={false}
//               d="M1.01 1.50 L420.99 1.50 "
//             />
//           </Svg>
//           <Text style={styles.anniesTomatoSoup}>Annie’s Tomato Soup</Text>
//         </View>
//         <View style={styles.group1}>
//           <Svg
//             viewBox="0 0 423.00 4.00"
//             preserveAspectRatio="none"
//             style={styles.line4}
//           >
//             <Path
//               strokeWidth={1}
//               fill="rgba(0,0,0,1)"
//               stroke="rgba(255,255,255,1)"
//               isClosed={false}
//               d="M1.01 1.50 L420.99 1.50 "
//             />
//           </Svg>
//           <Text style={styles.anniesTomatoBisqu}>Annie’s Tomato Bisque</Text>
//         </View>
//         {/* <Center horizontal>
//           <TextInput placeholder="Search" style={styles.textInput} />
//         </Center> */}
//         <Text style={styles.text3}>Add Items</Text>
//         <FlatList
//           style={styles.dAcaa2}
//           renderItem={({ item, separators }) => {
//             return (
//               <View style={styles.eDJKwA}>
//                 <Text style={styles.Niojkc}>List Item</Text>
//               </View>
//             );
//           }}
//           ListHeaderComponent={({ highlighted }) => {
//             return (
//               <View style={styles.DZ8Qej}>
//                 <Text style={styles.xg0jAy}>List Header</Text>
//               </View>
//             );
//           }}
//           ListFooterComponent={({ highlighted }) => {
//             return (
//               <View style={styles.OZvBTo}>
//                 <Text style={styles.w4Cq1N}>List Footer</Text>
//               </View>
//             );
//           }}
//           ItemSeparatorComponent={({}) => {
//             return <View style={styles.l3qIpH} />;
//           }}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   root: {
//     backgroundColor: "rgba(250,240,202,1)",
//     flex: 1
//   },
//   barsTabBar3Items: {
//     position: "absolute",
//     top: "92.26%",
//     left: "0.00%",
//     height: "7.74%",
//     width: "100.00%",
//     backgroundColor: "transparent"
//   },

//   oval: {
//     position: "absolute",
//     height: "100.00%",
//     width: "100.00%",
//     top: "0.00%",
//     left: "0.00%",
//     backgroundColor: "transparent",
//     borderColor: "transparent"
//   },
//   line3: {
//     position: "absolute",
//     height: "8.62%",
//     width: "77.59%",
//     top: "46.55%",
//     left: "8.62%",
//     backgroundColor: "transparent",
//     borderColor: "transparent",
//     transform: [
//       {
//         scaleX: -1
//       }
//     ]
//   },
//   line: {
//     position: "absolute",
//     height: "0.41%",
//     width: "101.93%",
//     top: "19.77%",
//     left: "-2.05%",
//     backgroundColor: "transparent",
//     borderColor: "transparent"
//   },
//   group: {
//     position: "absolute",
//     top: "21.06%",
//     left: 0,
//     height: "6.93%",
//     width: "101.66%"
//   },
//   line2: {
//     position: "absolute",
//     height: "5.88%",
//     width: "100.24%",
//     top: "95.10%",
//     left: "-0.12%",
//     backgroundColor: "transparent",
//     borderColor: "transparent"
//   },
//   anniesTomatoSoup: {
//     position: "absolute",
//     top: "0.00%",
//     left: "4.28%",
//     height: "78.43%",
//     width: "90.26%",
//     backgroundColor: "transparent",
//     color: "rgba(106,106,106,1)",
//     fontSize: 28,
//     fontFamily: "Futura-Medium",
//     letterSpacing: 1.42
//   },
//   group1: {
//     position: "absolute",
//     top: "29.08%",
//     left: 0,
//     height: "6.93%",
//     width: "101.66%"
//   },
//   line4: {
//     position: "absolute",
//     height: "5.88%",
//     width: "100.24%",
//     top: "95.10%",
//     left: "-0.12%",
//     backgroundColor: "transparent",
//     borderColor: "transparent"
//   },
//   anniesTomatoBisqu: {
//     position: "absolute",
//     top: "0.00%",
//     left: "4.28%",
//     height: "78.43%",
//     width: "90.26%",
//     backgroundColor: "transparent",
//     color: "rgba(106,106,106,1)",
//     fontSize: 28,
//     fontFamily: "Futura-Medium",
//     letterSpacing: 1.42
//   },
//   textInput: {
//     height: 40,
//     width: 323,
//     top: 85,
//     position: "absolute",
//     backgroundColor: "rgba(255,255,255,1)",
//     opacity: 1,
//     borderRadius: 43,
//     fontSize: 18,
//     textAlign: "center"
//   },
//   text3: {
//     top: "2.5%",
//     width: 236,
//     height: "9.23%",
//     position: "absolute",
//     fontSize: 42,
//     fontFamily: "Futura-Medium",
//     letterSpacing: 2.44,
//     color: "rgba(249,87,56,1)",
//     left: "20.22%"
//   },
//   dAcaa2: {
//     height: 1,
//     width: 1,
//     top: 368.38,
//     left: 121.51,
//     position: "absolute"
//   },
//   eDJKwA: {
//     backgroundColor: "#ffffff",
//     padding: 15,
//     paddingTop: 10,
//     paddingBottom: 10
//   },
//   Niojkc: {
//     color: "#000000"
//   },
//   DZ8Qej: {
//     padding: 15,
//     backgroundColor: "#ffffff"
//   },
//   xg0jAy: {
//     color: "#999999",
//     fontSize: 13
//   },
//   OZvBTo: {
//     padding: 15,
//     backgroundColor: "#ffffff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#999999"
//   },
//   w4Cq1N: {
//     color: "#999999",
//     fontSize: 14
//   },
//   l3qIpH: {
//     backgroundColor: "#999999",
//     left: 15,
//     height: 2
//   }
// });

// import React from 'react';
// import { ScrollView, StyleSheet } from 'react-native';
// import { ExpoConfigView } from '@expo/samples';

// export default class SettingsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'app.json',
//   };

//   render() {
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//     return <ExpoConfigView />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#FAF0CA',
//   },
// });

