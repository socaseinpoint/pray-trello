import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TaskList from './TaskList';

const Desk = ({ list, loading, error, deskId }) => {
  return (
    <View>
      <Text>{deskId}</Text>
      <TaskList list={list} />
    </View>
  );
};

export default Desk;
