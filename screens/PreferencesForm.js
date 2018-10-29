import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Button121 from "../symbols/button121";
import Checkbox1 from "../symbols/checkbox1";
import '@expo/vector-icons';
import { Constants } from 'expo';
import { CheckBox } from 'react-native-elements';

import { View, StyleSheet, TextInput, Text } from "react-native";

export default class PreferencesForm extends Component {
  state = {
    checked: false,
  };
  render() {
    return (
      <View style={styles.root}>
        <Center horizontal>
          <Text style={styles.text}>What's your budget?</Text>
        </Center>
        <Center horizontal>
          <Text style={styles.text2}>How far are you willing to travel?</Text>
        </Center>
        <Center horizontal>
          <TextInput
            style={styles.textInput3}
            placeholder=""
            placeholderTextColor="rgba(238,150,75,1)"
          />
        </Center>
        <Text style={styles.text4}>$</Text>
        <Center horizontal>
          <TextInput
            style={styles.textInput4}
            placeholder=""
            placeholderTextColor="rgba(238,150,75,1)"
          />
        </Center>
        <Text style={styles.text5}>mi</Text>
        <Button121
          style={styles.button121}
          onPress={() =>{
            this.props.navigation.push("AddItemsShopping");
          }}
        />
        <Text style={styles.text6}>Allow substitutions</Text>
        
        <View style={styles.checkbox1}>
          <CheckBox 
            checked containerStyle= {{margin: 0, padding: 0, 
              backgroundColor: "rgba(250,240,202,1)", borderColor: "rgba(250,240,202,1)"}}
           // style={{backgroundColor: "rgba(250,240,202,1)", color: "#EE964B"}}
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
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
  text: {
    top: 109.51,
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "Futura-Medium",
    fontSize: 30,
    color: "rgba(106,106,106,1)"
  },
  textInput2: {
    top: "54.93%",
    width: 132,
    height: 34,
    position: "absolute",
    fontSize: 20,
    color: "rgba(238,150,75,1)"
  },
  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 30,
    fontFamily: "Futura-Medium",
    color: "rgba(106,106,106,1)",
    width: 337,
    textAlign: "center",
    top: "38.92%"
  },
  textInput3: {
    top: "27.23%",
    width: 132,
    height: 34,
    position: "absolute",
    fontSize: 20,
    fontFamily: "Futura-Medium",
    color: "rgba(238,150,75,1)",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1
  },
  text4: {
    top: 181,
    position: "absolute",
    backgroundColor: "transparent",
    left: "27.78%",
    fontSize: 20
  },
  textInput4: {
    width: 132,
    height: 34,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 20,
    fontFamily: "Futura-Medium",
    color: "rgba(238,150,75,1)",
    top: "51.93%"
  },
  text5: {
    height: 21,
    width: 50,
    top: 345,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "Futura-Medium",
    left: "69.44%"
  },
  button121: {
    top: 588.63,
    left: 255.5,
    position: "absolute",
    height: 36
  },
  text6: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "Futura-Medium",
    color: "rgba(106,106,106,1)",
    top: "66.2%",
    left: "22.78%"
  },
  checkbox1: {
    flex: 1,
    top: 430,
    left: 30,
    position: "absolute",
    //backgroundColor: "rgba(250,240,202,1)",
   // width: 60,
    margin: 0,
    padding: 0
  },
  
  
});
