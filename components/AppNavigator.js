import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './screen/HomeScreen'
import TaskScreen from './screen/TaskScreen'


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

export default AppNavigator