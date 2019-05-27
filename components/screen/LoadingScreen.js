import React from 'react';
import { refLogin } from '../../redux/actions';
import { Container, Header, Content, Spinner } from 'native-base'
import { connect } from 'react-redux';

// Login Check
class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.refLogin().then((user) => {
      this.props.navigation.navigate(user ? 'Main' : 'Login')
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color='green' />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ user }) => {
  const { isLoggedIn } = user
  return { isLoggedIn };
};

export default connect(mapStateToProps, { refLogin })(LoadingScreen);

