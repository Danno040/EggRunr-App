/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

// Usual react stuff
var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
} = React;

// Require top-level components
var Main = require('./app/Screens/Main.js');

class EggRunr extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'EggRunr',
          component: Main,
        }}
      />
    );
  }
};

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: '#111',
  },
});

AppRegistry.registerComponent('EggRunr', () => EggRunr);
