import React from 'react';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import DeskContainer from '../containers/DeskContainer';

const MyDesk = () => (
  <>
    <AppHeader title="My Desk" />
    <AppContent>
      <DeskContainer />
    </AppContent>
  </>
);

export default MyDesk;
