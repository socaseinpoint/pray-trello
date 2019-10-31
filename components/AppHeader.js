import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { red } from 'ansi-colors';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
  }
});

const AppHeader = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default AppHeader;
