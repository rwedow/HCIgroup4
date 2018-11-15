import React from 'react';
import { TextInput, StyleSheet, ListView } from 'react-native';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    let data = {
      input: ''
    }
    this.props.parentReference(data);
  }

  // callBack = (dataFromChild) => {
  //   dataFromChild: this.state.dataSource
  // }
  
  // searchFilter(text){
  //   const newData = this.state.resultsArray.filter(function(item){
  //     const itemData = item.toUpperCase()
  //     const textData = text.toUpperCase()
  //     return itemData.indexOf(textData) > -1
  //   })
  //   this.setState({
  //     dataSource: ds.cloneWithRows(newData),
  //     text: text,
  //   })
  //   this.props.parentReference(data);
  // }
  
  render() {
    return <TextInput
      style={styles.textInput}
      value={this.input}
      onChangeText={(text) => this.props.searchFilter(text)}
      placeholder="Search"
      showOnLoad
      />
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 22,
    flex: .1,
    backgroundColor: "#fff",
    height: 50,
    width: 355,
    margin: 5,
    marginLeft: 10,
    position: "absolute",
    borderRadius: 40,
    fontSize: 22,
    textAlign: "center"
  },
})
