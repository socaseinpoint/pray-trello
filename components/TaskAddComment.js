import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import DialogIcon from '../dist/icons/dialog.svg';

const styles = StyleSheet.create({
  input: {
    padding: 15,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 12,
  },
  label: {
    color: '#9C9C9C',
    fontSize: 17,
    lineHeight: 20,
  },
});

const TaskAddComment = () => (
  <View style={styles.input}>
    <SvgUri style={styles.icon} source={DialogIcon} width="20" height="20" />
    <Text style={styles.label}>Add a comment...</Text>
  </View>
);

export default TaskAddComment;
