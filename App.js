import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { createAppContainer } from 'react-navigation'
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import AuthenticationNavigator from './components/AuthenticationNavigator'

const AppContainer = createAppContainer(AuthenticationNavigator);

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
        <AppContainer />
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
