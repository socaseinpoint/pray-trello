import React from 'react';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import DeskContainer from '../containers/DeskContainer';

const DeskScreen = ({ navigation }) => (
  <>
    <AppHeader title="My Desk" />
    <AppContent>
      <DeskContainer navigation={navigation} />
    </AppContent>
  </>
);

export default DeskScreen;
