import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppContent from '../components/AppContent';
import TaskListContainer from '../containers/TaskListContainer';

const SubTaskListScreen = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <AppContent>
        <TaskListContainer navigation={navigation} />
      </AppContent>
    </ScrollView>
  </SafeAreaView>
  
);

SubTaskListScreen.navigationOptions = {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
};

export default SubTaskListScreen;
