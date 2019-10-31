import React from 'react';
import { View, Text } from 'react-native';

const TaskList = ({list}) => (
  <View>
    {list.map((task) => (
      <Text>{task.name}</Text>
    ))}
  </View>
);

export default TaskList;
