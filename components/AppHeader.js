import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 60,
    paddingBottom: 23,
  },
  title: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
  }
});

const AppHeader = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default AppHeader;
