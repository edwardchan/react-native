'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Tab from './Tab';

// var styles = require('../styles');

var tabList = [
    { 'id': 1, 'name': 'Welcome', 'url': '/home' },
    { 'id': 2, 'name': 'List', 'url': '/list' },
];

var { ScrollView, TouchableHighlight} = React;

class Navigation extends Component {
  _handleClick() {
    this.props.navigator.push({
      component: ListView,
      props: { parentListen: this._listen.bind(this)}
    });
    console.log('Navigation _handleClick');
  }
  render() {
    if (!this.props.tabList.length) {
     return null;
    }

    var trendNodes = this.props.tabList.map(function(tab) {
      return (
        <Tab
          url={tab.url}
          name={tab.name}
          key={tab.id}>
        </Tab>
      );
    });

    return (
     <View>
       {trendNodes}
     </View>
    );
  }
}

export default Navigation;
