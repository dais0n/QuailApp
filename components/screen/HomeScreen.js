import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
import { Header } from "react-native-elements";

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor }} size={25} />
    ),
  }

  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
