import React from 'react';
import { useSelector } from 'react-redux';
import { getTask } from '../selectors/task';
import Task from '../components/Task';

const TaskContainer = ({ navigation }) => {
  const task = useSelector((state) => getTask(state));
  const deskId = navigation.getParam('id', null);

  return (
    <>
    <Task
      loading={task.loading}
      error={task.error}
      list={task.results}
      deskId={deskId}
    />
    </>
  );
};

export default TaskContainer;
