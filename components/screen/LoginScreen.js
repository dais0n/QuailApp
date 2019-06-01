import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons'
import { login } from '../../redux/actions'

class LoginScreen extends Component {

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('Main');
    }
  }

  async onLoginButtonPress() {
    // if user don't login
    this.props.login()
    this.props.navigation.navigate('Main');
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor }} size={25} />
    ),
  }

  render() {
    return (
        <View>
          <Text>Logged in....</Text>
        </View>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { isLoggedIn } = user
  return { isLoggedIn };
};

export default connect(mapStateToProps, { login })(LoginScreen);
