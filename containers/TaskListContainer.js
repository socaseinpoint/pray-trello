import React from 'react';
import { useSelector } from 'react-redux';
import { getTaskList } from '../selectors/task';
import TaskList from '../components/TaskList';

const TaskListContainer = ({ navigation }) => {
  const task = useSelector((state) => getTaskList(state));
  const deskId = navigation.getParam('id', null);

  return (
    <TaskList
      loading={task.loading}
      error={task.error}
      list={task.results}
      deskId={deskId}
      navigate={navigation.navigate}
    />
  );
};

export default TaskListContainer;
