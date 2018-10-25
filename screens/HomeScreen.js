import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import { TextInput, StyleSheet } from "react-native";
var createClass = require('create-react-class');

export default class HomeScreen extends Component {
// const HomeScreen = React.createClass({

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.startButton}>
          <Svg
            viewBox="0 0 345.00 345.00"
            preserveAspectRatio="none"
            style={styles.oval}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,127,102,1)"
              isClosed={true}
              d="M172.50 345.00 C267.75 345.00 345.00 267.75 345.00 172.50 C345.00 77.25 267.75 0.00 172.50 0.00 C77.25 0.00 0.00 77.25 0.00 172.50 C0.00 267.75 77.25 345.00 172.50 345.00 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 319.00 319.00"
            preserveAspectRatio="none"
            style={styles.oval2}
          >
            <Path
              strokeWidth={0}
              fill="rgba(249,87,56,1)"
              isClosed={true}
              d="M159.50 319.00 C247.58 319.00 319.00 247.58 319.00 159.50 C319.00 71.42 247.58 0.00 159.50 0.00 C71.42 0.00 0.00 71.42 0.00 159.50 C0.00 247.58 71.42 319.00 159.50 319.00 Z"
            />
          </Svg>
          <Center horizontal> 
            <Text style={styles.text}>Start Shopping!</Text>
          </Center>
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
  startButton: {
    position: "absolute",
    top: "26.63%",
    left: "8.45%",
    height: "50.88%",
    width: "83.33%"
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
  oval2: {
    position: "absolute",
    height: "92.46%",
    width: "92.46%",
    top: "3.77%",
    left: "3.77%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  text: {
    position: "absolute",
    height: 159,
    width: 266,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(250,240,202,1)",
    fontSize: 55,
    fontFamily: "Futura-Medium",
    display: "flex",
    left: 22,
    top: 50
  }
});


// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TouchableHighlight,
//   View,
// } from 'react-native';

// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';

// import Colors from '../constants/Colors';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

//           <View style={styles.getStartedContainer}>
//             {/* {this._maybeRenderDevelopmentModeWarning()} } */}

//             <Text style={styles.getStartedText}>Start your first grocery list!</Text>

//             {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
//               <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
//             </View> */}

//             <TouchableHighlight onPress={() => navigate('Links')}>
//               <Image
//                 source={
//                   __DEV__
//                     ? require('../assets/images/shoppingIcon1.png')
//                     : require('../assets/images/shoppingIcon1.png')
//                 }
//                 onPress={this._startList}
//                 style={styles.welcomeImage}
//               />
//             </TouchableHighlight>

           
//           </View>

//           {/* <View style={styles.helpContainer}>
//             <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
//               <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
//             </TouchableOpacity>
//           </View> */}
//         </ScrollView>

//         {/* <View style={styles.tabBarInfoContainer}>
//           <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

//           <View style={[styles.codeHighlightContainer, styles.navigationFilename]} >
//             <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
//           </View>
//         </View> */}
//       </View>
//     );
//   }

//   _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );

//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will be slower but you can use useful development
//           tools. {learnMoreButton}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }

//   _startList = () => {
//     navigate('Links', {name: Jane});
//   }

//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#FAF0CA',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     // width: 100,
//     height: 200,
//     resizeMode: 'contain',
//     marginTop: 10,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//     marginTop: 100
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     // backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
