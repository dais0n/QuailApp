import React, { Component } from "react";
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor }} size={25} />
    ),
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>Logged in....</Text>
        </View>
    );
  }
}

export default HomeScreen
