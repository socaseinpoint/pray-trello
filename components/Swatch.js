import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  swatch: {
    backgroundColor: 'gray',
    height: 22,
    width: 3,
    borderRadius: 10,
    marginRight: 15,
  },
});

const Swatch = () => (
  <View style={styles.swatch} />
);

export default Swatch;
