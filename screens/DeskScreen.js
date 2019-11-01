import React from 'react';
import AppHeader from '../components/AppHeader';
import DeskContainer from '../containers/DeskContainer';

const DeskScreen = ({ navigation }) => (
  <DeskContainer navigation={navigation} />
);

DeskScreen.navigationOptions = {
  header: () => <AppHeader title="Desk"/>,
};


export default DeskScreen;
