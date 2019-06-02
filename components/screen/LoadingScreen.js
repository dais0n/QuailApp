import React from 'react';
import { refLogin } from '../../redux/actions';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

// Login Check
class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.refLogin().then((user) => {
      this.props.navigation.navigate(user ? 'Main' : 'Login')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Logged in....</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const { isLoggedIn } = user
  return { isLoggedIn };
};

export default connect(mapStateToProps, { refLogin })(LoadingScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
