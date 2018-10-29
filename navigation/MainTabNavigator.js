import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListsScreen from '../screens/ListsScreen';
import BrowseScreen from '../screens/BrowseScreen';
import Colors from '../constants/Colors';
import NameList from '../screens/NameList';
import AddItems from '../screens/AddItems';
import PreferencesForm from '../screens/PreferencesForm';
import StartShoppingScreen from '../screens/StartShoppingScreen';
import IndividualListScreen from '../screens/IndividualListScreen';
import IndividualList2 from '../screens/IndividualList2';
import AddItemsShopping from '../screens/AddItemsShopping';
import RecipesTab from '../screens/RecipesTab';
import Test from '../screens/Test';

// static navigationOptions = {
//   title: 'Home',
//   headerTintColor: '#ffffff',
//   headerStyle: {
//     backgroundColor: '#2F95D6',
//     borderBottomColor: '#ffffff',
//     borderBottomWidth: 3,
//   },
//   headerTitleStyle: {
//     fontSize: 18,
//   },
// };

export const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
      navigationOptions: {
        headerBackTitleStyle: '#000',
        title: "Home",
        headerStyle: {
          backgroundColor: '#ff0000'
        }
      },
    },
    PreferencesForm: {
      screen: PreferencesForm,
    },
    AddItemsShopping: {
      screen: AddItemsShopping,
    },
    IndividualListScreen: {
      screen: IndividualListScreen,
    },
    Home: {
      screen: StartShoppingScreen,
      },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'home-icon'
      }
    />
  ),
};

const ListsStack = createStackNavigator({
  List: {
    screen: ListsScreen,
  },
  RecipesTab: {
    screen: RecipesTab,
  },
  NameList: {
    screen: NameList,
  },
  AddItems: {
    screen: AddItems,
  },
  IndividualList2: {
    screen: IndividualList2,
  },
  
});

ListsStack.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const BrowseStack = createStackNavigator({
  Browse: BrowseScreen,
});

BrowseStack.navigationOptions = {
  tabBarLabel: 'Browse',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator ({
  HomeStack,
  ListsStack,
  BrowseStack
});