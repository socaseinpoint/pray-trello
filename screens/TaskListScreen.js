import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppContent from '../components/AppContent';
import TaskListContainer from '../containers/TaskListContainer';

const SubTaskListScreen = ({ navigation, isMy }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <AppContent>
        <TaskListContainer navigation={navigation} isMy={isMy} />
      </AppContent>
    </ScrollView>
  </SafeAreaView>
);


export default SubTaskListScreen;
