import React, { Component } from "react";
import {
    Button
} from "react-native";
import { connect } from 'react-redux';
import { Container, Header, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'
import { login } from '../../redux/actions';

class HomeScreen extends Component {
  async onLoginButtonPress() {
    if (this.props.user == undefined) {
      login()
    }
    console.log(this.props.user)
  }

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
          <Button info title="Google認証" onPress={this.onLoginButtonPress.bind(this)} />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { login })(HomeScreen);
