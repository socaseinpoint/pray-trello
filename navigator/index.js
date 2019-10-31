import { createAppContainer } from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import DeskScreen from '../screens/DeskScreen';
import TaskListScreen from '../screens/TaskListScreen';
import TaskScreen from '../screens/TaskScreen';

const AppNavigator = createStackNavigator(
  {
    Desk: DeskScreen,
    TaskList: createMaterialTopTabNavigator({
      MyTask: TaskListScreen,
      SubTask: TaskListScreen,
    }),
    Task: TaskScreen,
  },
  {
    initialRouteName: 'Desk',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
