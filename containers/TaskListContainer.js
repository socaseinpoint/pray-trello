import React from 'react';
import { useSelector } from 'react-redux';
import { getMyTaskList, getSubTaskList } from '../selectors/task';
import TaskList from '../components/TaskList';

const TaskListContainer = ({ navigation, isMy }) => {
  const deskId = navigation.getParam('id', null);
  const task = isMy ? useSelector((state) => getMyTaskList(state)) : useSelector((state) => getSubTaskList(state));
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
