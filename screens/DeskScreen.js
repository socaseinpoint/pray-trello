import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AppContent from '../components/AppContent';
import AppHeader from '../components/AppHeader';
import DeskContainer from '../containers/DeskContainer';

const DeskScreen = ({ navigation }) => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <AppContent>
        <DeskContainer navigation={navigation} />
      </AppContent>
    </ScrollView>
  </SafeAreaView>
);

DeskScreen.navigationOptions = {
  headerTitle: () => <AppHeader title="Desk"/>,
  headerStyle: {
    padding: 0,
  },
};


export default DeskScreen;
