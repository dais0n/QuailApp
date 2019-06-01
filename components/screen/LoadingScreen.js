import React from 'react';
import { refLogin } from '../../redux/actions';
import { connect } from 'react-redux';
import { View, Text } from "react-native";

// Login Check
class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.refLogin().then((user) => {
      this.props.navigation.navigate(user ? 'Main' : 'Login')
    })
  }

  render() {
    return (
        <View>
          <Text>Logged in....</Text>
        </View>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const { isLoggedIn } = user
  return { isLoggedIn };
};

export default connect(mapStateToProps, { refLogin })(LoadingScreen);

