import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import AppHeader from './AppHeader';

export default class App extends React.Component {

  render() {
    return ( 
      
        
      <AppContainer/>
      
      
    );
  }

}

const TabNavigator = createBottomTabNavigator({
  WriteYourOwn: {
    screen: WriteScreen
  },
  ReadStory: {
    screen: ReadScreen
  }
})

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});