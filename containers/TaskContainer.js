import React from 'react';
import { useSelector } from 'react-redux';
import { getTask, getTaskMembers, getTaskCommentsWithAuthor } from '../selectors/task';
import Task from '../components/Task';

const TaskContainer = ({ navigation }) => {
  const taskId = navigation.getParam('taskId', null);
  const task = useSelector((state) => getTask(state, taskId));
  const members = useSelector((state) => getTaskMembers(state, task.members));
  const comments = useSelector((state) => getTaskCommentsWithAuthor(state, task.comments));

  return (
    <Task
      createdAt={task.createdAt}
      lastPrayed={task.lastPrayed}
      prayedTotal={task.prayedTotal}
      prayedByMe={task.prayedByMe}
      prayedByOthers={task.prayedByOthers}
      members={members}
      comments={comments}
    />
  );
};

export default TaskContainer;
