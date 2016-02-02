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

class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Feed View!
        </Text>
      </View>
    );
  }
}

module.exports = ListView;
