import React from 'react';
import { useSelector } from 'react-redux';
import { getDesk } from '../selectors/desk';
import AppHeader from '../components/AppHeader';

const TaskListHeaderContainer = ({ navigation }) => {
  const deskId = navigation.getParam('id', null);
  const title = useSelector((state) => getDesk(state, deskId)).name;

  return (
    <AppHeader title={title} />
  );
};

export default TaskListHeaderContainer;
