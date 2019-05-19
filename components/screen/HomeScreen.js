import React, { Component } from "react";
import {
    Text,
    Button
} from "react-native";
import { Container, Header, Content } from 'native-base'

import Icon from 'react-native-vector-icons/Octicons'
import { Google } from 'expo';
import firebase from '../../plugins/firebase'
import { ENV } from "../../environments";


class HomeScreen extends Component {
  state = {
    user: null
  }

  async onLoginButtonPress() {
    const result = await Google.logInAsync({
      behavior: 'web',
      iosClientId: ENV.firebaseIosCleintID
    });

    if (result.type === "success") {
      const { idToken, accessToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      return firebase.auth().signInWithCredential(credential).catch((error) => console.log(error))
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
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
export default HomeScreen
