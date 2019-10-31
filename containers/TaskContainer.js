import React from 'react';
import { useSelector } from 'react-redux';
import { getTask } from '../selectors/task';
import Task from '../components/Task';

const TaskContainer = ({ navigation }) => {
  const taskId = navigation.getParam('taskId', null);
  const task = useSelector((state) => getTask(state, taskId));

  console.log('taskId', taskId);
  console.log('task', task);

  return (
    <Task
      name={task.name}
    />
  );
};

export default TaskContainer;
