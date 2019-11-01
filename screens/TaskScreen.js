import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import TaskContainer from '../containers/TaskContainer';
import TaskHeader from '../components/TaskHeader';

const TaskScreen = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <TaskContainer navigation={navigation} />
    </ScrollView>
  </SafeAreaView>
);

TaskScreen.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('taskName', null);
  return ({
    header: () => <TaskHeader goBack={navigation.goBack} title={title} />,
    headerLeft: null,
  });
};

export default TaskScreen;
