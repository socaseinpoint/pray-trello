import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeskScreen from '../screens/DeskScreen';
import TaskScreen from '../screens/TaskScreen';
import TaskListContainer from './TaskListNavigator';

const AppNavigator = createStackNavigator(
  {
    Desk: DeskScreen,
    TaskList: TaskListContainer,
    Task: TaskScreen,
  },
  {
    initialRouteName: 'Desk',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
