import React from 'react';
import { View } from 'react-native';
import AddTask from './AddTask';
import TaskListItem from './TaskListItem';

const TaskList = ({ list, loading, error, deskId, navigate }) => {
  return (
    <View>
      <AddTask />
      {list.map((task) => (
        <TaskListItem
          name={task.name}
          id={task.id}
          navigate={navigate}
          key={task.id}
          prayedTotal={task.prayedTotal}
          membersQuantity={task.members.length}
        />
      ))}
    </View>
  );
};

export default TaskList;
