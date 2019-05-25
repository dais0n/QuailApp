import React from 'react';
import { refLogin } from '../../redux/actions';
import { Container, Header, Content, Spinner } from 'native-base'
import { connect } from 'react-redux';

class LoadingScreen extends React.Component {
  componentDidMount() {
    this.props.refLogin().then(user =>
      this.props.navigation.navigate(user ? 'Main' : 'Login')
    )
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

export default connect(null, { refLogin })(LoadingScreen);
