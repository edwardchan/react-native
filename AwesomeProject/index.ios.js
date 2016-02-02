/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

var styles = require('./styles');
var WelcomeView = require('./Components/WelcomeView.jsx');
var ListView = require('./Components/ListView.jsx');

class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'WelcomeView', component: WelcomeView}}
        configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
            // count the number of func calls
            console.log(route, navigator);

            if (route.component) {
                return React.createElement(route.component, { navigator });
            }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
