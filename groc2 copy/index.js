/** @format */
var React = require('react-native');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView
} = React;
 
var firebase = require('firebase');
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const firebaseConfig = {
  apiKey: "AIzaSyDOa3uEMxU0z6Tx956Eo5XdxlvcmF4POEc",
  authDomain: "<your-auth-domain>",
  databaseURL: "https://trolleyproj.firebaseio.com",
  storageBucket: "trolleyproj.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);


// class devdacticFirebase extends Component {
//   // Your App Code
//   constructor(props) {
//     super(props);
//     var myFirebaseRef = new Firebase('https://.firebaseio.com');
    
//     myFirebaseRef.set({
//       title: "Hello World!",
//       author: "Simon",
//       location: {
//         city: "Muenster",
//         state: "Germany",
//         zip: 48155
//       }
//     });
//   }
// }
 
// var styles = StyleSheet.create({
//   // Your App Style
// });
 
// AppRegistry.registerComponent('devdacticFirebase', () => devdacticFirebase);