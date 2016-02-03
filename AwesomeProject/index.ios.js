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

import Navigation from './Components/Navigation';
import WelcomeView from './Components/WelcomeView';
import {ListView} from './Components/ListView';
import {Tab} from './Components/Tab';

var styles = require('./styles');

let tabList = [
    { 'id': 1, 'name': 'Welcome', 'url': '/home' },
    { 'id': 2, 'name': 'List', 'url': '/list' },
];

class AwesomeProject extends Component {
  _renderScene(route, navigator) {
    var Component = route.component;

    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigation tabList={tabList} />

        <Navigator
          initialRoute={{ component: WelcomeView, type: 'right' }}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={this._renderScene}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
