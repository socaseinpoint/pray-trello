import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }
})

const DeskButton = ({ children }) => <View style={styles.button}><Text>{children}</Text></View>;

export default DeskButton;
