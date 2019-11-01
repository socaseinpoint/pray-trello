import React from 'react';
import { useSelector } from 'react-redux';
import { getTask } from '../selectors/task';
import Task from '../components/Task';

const TaskContainer = ({ navigation }) => {
  const taskId = navigation.getParam('taskId', null);
  const task = useSelector((state) => getTask(state, taskId));

  return (
    <Task
      createdAt={task.createdAt}
      lastPrayed={task.lastPrayed}
      prayedTotal={task.prayedTotal}
      prayedByMe={task.prayedByMe}
      prayedByOthers={task.prayedByOthers}
    />
  );
};

export default TaskContainer;
