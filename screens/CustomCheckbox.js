import React, { Component } from "react";
import { Platform, StyleSheet, View, Text} from 'react-native';
import { CheckBox } from 'react-native-elements';
export default class CustomCheckbox extends Component {
      constructor(props) {
        super(props);
        this.state = {
          checked: false,
        };
      }
      toggleChange(){
        this.setState({checked: !this.state.checked});
      }
      render() {
        return (
            <View>
            <Text>{this.props.name}</Text>
            <CheckBox 
                containerStyle= {{margin: 0, padding: 0, 
                backgroundColor: "rgba(250,240,202,1)", borderColor: "rgba(250,240,202,1)"}}
                checked={this.state.checked}
                onPress={() =>  this.toggleChange()}
            />
            </View>
        );
      }
    }