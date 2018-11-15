import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';
import { CheckBox } from 'react-native-elements';

// import '@expo/vector-icons';

export default class App extends Component {
  state = {
    checked: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <CheckBox
          title="Press me"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
