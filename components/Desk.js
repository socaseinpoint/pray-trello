import React from 'react';
import { View, StyleSheet } from 'react-native';
import DeskButton from './DeskButton';

const Desk = ({ list, loading, error, navigate }) => {
  return (
    <View>
      {list.map((desk) => (
        <DeskButton key={desk.id} navigate={navigate} title={desk.name} id={desk.id} />
      ))}
    </View>
  );
};

export default Desk;
