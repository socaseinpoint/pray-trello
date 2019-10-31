import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppContent from '../components/AppContent';
import TaskContainer from '../containers/TaskContainer';

const TaskScreen = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <AppContent>
        <TaskContainer navigation={navigation} />
      </AppContent>
    </ScrollView>
  </SafeAreaView>
  
);

TaskScreen.navigationOptions = {
  title: 'To Do',
};

export default TaskScreen;
