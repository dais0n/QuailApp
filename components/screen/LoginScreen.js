import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import { connect } from 'react-redux';
import { View, Container, Header, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Octicons'
import { login } from '../../redux/actions'

class LoginScreen extends Component {

  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.navigate('Main');
    }
  }

  async onLoginButtonPress() {
    // if user don't login
    this.props.login().then(user => {
      this.props.navigation.navigate(user ? 'Main' : 'Login');
    })
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
            <TouchableOpacity
              onPress={() => this.onLoginButtonPress()}>
            <View style={{justifyContent: 'center' , alignItems: 'center'}}>
              <Image
                source={require('../../assets/google_signin_button.png')}
              />
            </View>
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ tapeTask, user }) => {
  return { user };
};

export default connect(mapStateToProps, { login })(LoginScreen);
