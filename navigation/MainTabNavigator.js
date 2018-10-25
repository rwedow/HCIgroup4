import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListsScreen from '../screens/ListsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import NameList from '../screens/NameList';
import AddItems from '../screens/AddItems';

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
    }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ListsStack = createStackNavigator({
  List: {
    screen: ListsScreen,
  },
  NameList: {
    screen: NameList,
  },
  AddItems: {
    screen: AddItems,
  },
});

ListsStack.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen, 
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator ({
  HomeStack,
  ListsStack,
  SettingsStack
});