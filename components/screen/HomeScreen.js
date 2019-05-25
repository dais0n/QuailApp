import React, { Component } from "react";
import { Container, Header, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor }} size={25} />
    ),
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen
