import React from 'react';
import { View, StyleSheet } from 'react-native';
import DeskButton from './DeskButton';

const Desk = ({ list, loading, error }) => {
  console.log(list);
  return (
    <View>
      {list.map((desk) => <DeskButton>{desk.name}</DeskButton>)}
    </View>
  );
};

export default Desk;
