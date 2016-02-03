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
  _handlePress() {
    this.props.navigation.pop();
  }
  render() {
    return (
      <View style={styles.container} onClick={this._handlePress}>
        <Text>
          Feed View!
        </Text>
      </View>
    );
  }
}

export default ListView;
