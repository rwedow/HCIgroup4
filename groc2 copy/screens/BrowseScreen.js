import React, { Component } from "react";
import { TabView, TabContent } from "@builderx/tab-view";
import { Svg, Path } from "react-native-svg";
import { View, Text, StyleSheet, TextInput, ListView, TouchableHighlight, FlatList} from "react-native";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class BrowseScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      input: '',
      dataSource: ds
    }
    this.resultsArray = ['Tomato Soup', 'Salsa', 'French Fries', 'Omlet', 'Scrambled Eggs', 'Applesauce', 'Lentil Dal', 'Carrot Cake', 'Lemon Bars', 'Barbeque Jackfruit', 'Ginger Tea', 'Blueberry Pie', 'Sweet Potato Cassarole', 'Cherry Muffins', 'Tacos'];
    this.selectedArray = [];
    this.itemColor = 'transparent';
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

  selectItem = (rowData) => {
    if(!this.selectedArray.includes(rowData)) {
      this.selectedArray.push(rowData);
      this.itemColor = '#FFFFFF';
      console.log(this.selectedArray);
    } else {
      var index = this.selectedArray.indexOf(rowData);
      if (index > -1) {
        this.selectedArray.splice(index, 1);
      }
      this.itemColor = 'transparent';
      console.log(this.selectedArray);
    }
  }

  rowStyle = (item) => {
    if(this.selectedArray.includes(item)){
      console.log("oh");
      return(
        {
          backgroundColor: "#FFFFFF",
        }
      )
    }
    else{
      console.log("interesting");
      return(
        {
          backgroundColor: "transparent",
        }
      )
    }
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

        <TextInput
          style={styles.textInput}
          value={this.state.input}
          onChangeText={(text) => this.searchFilter(text)}
          placeholder="Search"
          showOnLoad
        />

        <TabView
          style={styles.tab}
          tabStyle={styles.tab_tabStyle}
          tabIndicatorStyle={styles.tab_tabIndicatorStyle}
          tabLabelStyle={styles.tab_tabLabelStyle}
          tabBarStyle={styles.tab_tabBarStyle}
          activeTabIndex={0}
        >
          <TabContent title="Recipes">
            <View style={styles.navItem} />
          </TabContent>
          <TabContent title="Coupons">
            <View style={styles.navItem} />
          </TabContent>
        </TabView>

        {/* <FlatList
          dataSource={this.state.dataSource}
          data={this.resultsArray}
          renderItem={({item}) => 
            <TouchableHighlight onPress={() => { this.selectItem(item) }} underlayColor="white" style={{backgroundColor:this.itemColor}}>
              <Text style={styles.resultText}>{ item }</Text>
            </TouchableHighlight>
          }
          style={styles.resultItem}
          enableEmptySections={true}
        /> */}

        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.LVlines}
          renderRow={(rowData) => 
            <TouchableHighlight onPress={() => { this.selectItem(rowData) }} underlayColor="white" style={{backgroundColor:this.itemColor}}>
              <Text style={styles.resultText}>{ rowData }</Text>
            </TouchableHighlight>
          }
          // {backgroundColor:(this.selectedArray.includes(rowData) === false)? 'transparent':'#FFFFFF'}}
          // onPress={this.selectItem.bind(this, rowData)}
          style={styles.resultItem}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(250,240,202,1)",
    flex: 1
  },
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
  tab: {
    top: 65,
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
  resultItem: {
    top: "21.52%",
    left: "0.00%",
    height: "8.93%",
    width: "101.69%",
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
  group3: {
    position: "absolute",
    top: "28.53%",
    left: "0.00%",
    height: "15.08%",
    width: "101.69%"
  },
});