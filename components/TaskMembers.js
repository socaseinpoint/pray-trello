import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import AppContent from './AppContent';
import sampleImage from '../dist/users/sample.png';
import plusIcon from '../dist/users/plus.svg';

const styles = StyleSheet.create({
  title: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 13,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    marginRight: 8,
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: '#BFB393',
    borderRadius: 32,
  }
});

const TaskMembersItem = ({ source }) => (
  <View style={styles.col}>
    <Image
      source={source ? source : sampleImage}
      style={styles.image}
    />
  </View>
);

const TaskMembers = ({ members }) => (
  <AppContent>
    <Text style={styles.title}>Members</Text>
    <View style={styles.row}>
      {
        members.map((member) => <TaskMembersItem key={member.id} source={member.image} />)
      }
      <SvgUri style={styles.image} source={plusIcon} width="32" height="32" />
    </View>
  </AppContent>
);

export default TaskMembers;
