'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

var styles = require('../styles');

class Tab extends Component {
  _handleClick() {
    alert('hi');
  }
  render() {
    return (
      <View onClick={this._handleClick.bind(this)}>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Tab;
