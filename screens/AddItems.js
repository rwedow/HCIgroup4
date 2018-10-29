import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import Button122 from "../symbols/button122";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableHighlight, TouchableOpacity, ListView } from "react-native";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      input: '',
      dataSource: ds,
      color: 'black'
    }
    this.resultsArray = ['Tomato Soup', 'Salsa', 'Potatoes', 'Cheese', 'Eggs', 'Apples', 'Frozen Peas', 'Carrots', 'Lemons', 'Barbeque Sauce', 'Limes', 'Blueberries', 'Sweet Potatoes', 'Cherries', 'Tortillas'];
  }

  searchFilter(text){
    const newData = this.resultsArray.filter(function(item){
      const itemData = item.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }

  selectItem(item){
    //do something later
  }

  LVlines = () => {
    return(
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#FFF",
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.headerText}>Add Items</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.input}
          onChangeText={(text) => this.searchFilter(text)}
          placeholder="Search"
          showOnLoad
        />
        
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.LVlines}
          renderRow={(rowData) => <Text style={styles.resultText}>{ rowData }</Text>}
          // onPress={this.selectItem.bind(this, rowData)}
          style={styles.resultItem}
          enableEmptySections={true}
        />

        {/* <TouchableOpacity style={styles.group1} onPress={() => this.onItemPress()}>
          <Text style={styles.anniesTomatoBisqu}>Annie’s Tomato Bisque</Text>
        </TouchableOpacity> */}

        <Button122 style={styles.button1222} 
          onPress={() =>{
            this.props.navigation.push("IndividualList2");
          }}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
  headerText: {
    top: "2.5%",
    width: 236,
    height: "9.23%",
    position: "absolute",
    fontSize: 42,
    fontFamily: "Futura-Medium",
    letterSpacing: 2.44,
    color: "rgba(249,87,56,1)",
    left: "20.22%"
  },
  textInput: {
    position: "absolute",
    top: "11.74%",
    fontSize: 22,
    flex: .1,
    backgroundColor: "#fff",
    height: 50,
    width: 355,
    margin: 5,
    marginLeft: 10,
    borderRadius: 40,
    fontSize: 22,
    textAlign: "center"
  },
  resultText: {
    left: "4.28%",
    width: "90.26%",
    backgroundColor: "transparent",
    color: "rgba(106,106,106,1)",
    fontSize: 28,
    fontFamily: "Futura-Medium",
    letterSpacing: 1.42
  },
  resultsGroup: {
    flex: 1,
    justifyContent: 'space-between'
  },
  resultItem: {
    top: "21.52%",
    left: "0.00%",
    height: "8.93%",
    width: "101.69%",
  },
  group: {
    position: "absolute",
    top: "21.06%",
    left: 0,
    height: "6.93%",
    width: "101.66%"
  },
  button1222: {
    top: 589,
    left: 236,
    position: "absolute",
    height: 36
  }
});
