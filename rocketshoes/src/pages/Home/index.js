import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
  static navigationOptions = () => ({
    title: 'Rockertshoes | Home',
  });

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
