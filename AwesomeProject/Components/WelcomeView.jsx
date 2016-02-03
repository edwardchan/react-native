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

class WelcomeView extends Component {
  _handlePress() {
    this.props.navigator.push({
      component: ListView,
      props: { parentListen: this._listen.bind(this)}
    });
  }
  render() {
    return (
      <View style={styles.container} onPress={this._handlePress}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default WelcomeView;
