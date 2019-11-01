import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTask from './AddTask';
import TaskListItem from './TaskListItem';

const styles = StyleSheet.create({
  divider: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingBottom: 15,
  },
  button: {
    backgroundColor: '#BFB393',
    alignSelf: 'center',
    padding: 8,
    paddingLeft: 23,
    paddingRight: 23,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: 'white',
    textTransform: 'uppercase',
  }
});

const TaskList = ({ list, navigate }) => {
  const newTasks = list.filter((task) => !task.answered);
  const answeredTasks = list.filter((task) => task.answered);

  return (
    <View>
      <AddTask />
      <View>
        {newTasks.map((task) => (
          <TaskListItem
            name={task.name}
            id={task.id}
            navigate={navigate}
            key={task.id}
            prayedTotal={task.prayedTotal}
            membersQuantity={task.members.length}
            answered={task.answered}
          />
        ))}
      </View>
      <View style={styles.divider}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Hide Answered Prayers</Text>
        </View>
      </View>
      <View>
        {answeredTasks.map((task) => (
          <TaskListItem
            name={task.name}
            id={task.id}
            navigate={navigate}
            key={task.id}
            prayedTotal={task.prayedTotal}
            membersQuantity={task.members.length}
            answered={task.answered}
          />
        ))}
      </View>
    </View>
  );
};

export default TaskList;
