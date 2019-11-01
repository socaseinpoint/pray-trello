import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import TaskListScreen from '../screens/TaskListScreen';
import TaskListHeaderContainer from '../containers/TaskListHeaderContainer';

const navigationOptions = {
  tabBarOptions: {
    activeTintColor:'#72A8BC',
    inactiveTintColor:'#C8C8C8',
    style:{
        backgroundColor:'white',
    },
    indicatorStyle: {
        backgroundColor: '#72A8BC',
    },
  },
};

const TaskListNavigator = createMaterialTopTabNavigator({
  MyTask: {
    screen: ({navigation}) => <TaskListScreen isMy navigation={navigation} />,
    navigationOptions: {
      ...navigationOptions,
      tabBarLabel: 'My prayers',
    }
  },
  SubTask: {
    screen: ({navigation}) => <TaskListScreen isMy={false} navigation={navigation} />,
    navigationOptions: {
      ...navigationOptions,
      tabBarLabel: 'Subscribed',
    }
  },
});

const TaskListContainer = createAppContainer(TaskListNavigator);

TaskListContainer.navigationOptions = ({navigation}) => ({
  header: () => <TaskListHeaderContainer navigation={navigation} />,
});

export default TaskListContainer;
