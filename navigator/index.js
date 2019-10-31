import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DeskScreen from '../screens/DeskScreen';
import TaskScreen from '../screens/TaskScreen';
import UserScreen from '../screens/UserScreen';

const AppNavigator = createStackNavigator(
  {
    Desk: DeskScreen,
    Task: TaskScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Desk',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
