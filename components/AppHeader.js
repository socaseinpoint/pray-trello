import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { red } from 'ansi-colors';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    height: 64,
  }
});

const AppHeader = ({title}) => (
  <View style={styles.header}>
    <Text>{title}</Text>
  </View>
);

export default AppHeader;
