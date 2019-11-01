import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swatch from './Swatch';
import TaskMembers from './TaskMembers';
import TaskComments from './TaskComments';

const styles = StyleSheet.create({
  col: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  lastPrayed: {
    flexDirection: 'row',
    padding: 15,
  },
  lastPrayedText: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
  },
  tabValue: {
    color: '#BFB393',
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 6,
  },
  tabLabel: {
    color: '#514D47',
    fontSize: 13,
    lineHeight: 15,
  },
  tabComment: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    padding: 15,
    paddingTop: 26,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E5E5E5',
    width: '50%',
  }
});

const TaskTab = ({ value, label, comment }) => (
  <View style={styles.tab}>
    <View>
      <Text style={styles.tabValue}>{value}</Text>
    </View>
    <Text style={styles.tabLabel}>{label}</Text>
    {comment ? <Text style={styles.tabComment}>{comment}</Text> : null}
  </View>
);

const Task = ({ createdAt, lastPrayed, prayedTotal, prayedByMe, prayedByOthers, members, comments }) => (
  <View>
    <View style={styles.col}>
      <View style={styles.lastPrayed}>
        <Swatch />
        <Text style={styles.lastPrayedText}>{lastPrayed}</Text>
      </View>
    </View>
    <View style={styles.grid}>
      <View style={styles.gridItem}>
        <TaskTab
          value={createdAt}
          label="Date Added"
          comment={createdAt}
        />
      </View>
      <View style={styles.gridItem}>
        <TaskTab
          value={prayedTotal}
          label="Times Prayed Total"
        />
      </View>
      <View style={styles.gridItem}>
        <TaskTab
          value={prayedByMe}
          label="Times Prayed by Me"
        />
      </View>
      <View style={styles.gridItem}>
        <TaskTab
          value={prayedByOthers}
          label="Times Prayed by Others"
        />
      </View>
    </View>
    <TaskMembers members={members} />
    <TaskComments comments={comments} />
  </View>
);

export default Task;
