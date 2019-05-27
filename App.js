import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { createAppContainer } from 'react-navigation'
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import AuthenticationNavigator from './components/AuthenticationNavigator'
// for debug
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const AppContainer = createAppContainer(AuthenticationNavigator);

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
         <Root>
            <AppContainer />
         </Root>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
