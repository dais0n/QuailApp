import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import TaskScreen from './screen/TaskScreen';
import HomeScreen from './screen/HomeScreen';
import LoadingScreen from './screen/LoadingScreen';
import LoginScreen from './screen/LoginScreen';

const AppNavigator = createBottomTabNavigator({
  HomeTab: HomeScreen,
  TaskTab: TaskScreen,
},{
  initialRouteName: 'TaskTab',
  tabBarOptions: {
  animationEnabled: true,
  swipeEnabled: true,
  showLabel: false,
  showIcon: true,
}})

const AuthenticationNavigator =
  createSwitchNavigator(
    {
      Loading: { screen: LoadingScreen },
      Login: { screen: LoginScreen },
      Main: AppNavigator
    },
    {
      initialRouteName: 'Loading'
    }
  )

export default AuthenticationNavigator;
