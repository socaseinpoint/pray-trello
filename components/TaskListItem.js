import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import handsIcon from '../dist/icons/hands.svg';
import prayerIcon from '../dist/icons/prayer.svg';
import checkedIcon from '../dist/icons/checked.svg';

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  colLeft: {
    flexDirection: 'row',
    flex: 2,
    alignItems: "center",
  },
  colRight: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  swatch: {
    backgroundColor: 'gray',
    height: 22,
    width: 3,
    borderRadius: 10,
    marginRight: 15,
  },
  checkBox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#514D47',
    borderRadius: 4,
    marginRight: 15,
  },
  checkBoxFill: {
    width: 22,
    height: 22,
    marginTop: 3,
    marginLeft: 3,
  },
  name: {
    justifyContent: 'flex-start',
    overflow: 'hidden',
    height: 22,
    alignItems: 'center',
    width: '100%',
    width: 100,
  },
  nameText: {
    fontSize: 17,
    lineHeight: 22,
    color: '#514D47',
  },
  nameTextAnswered: {
    fontSize: 17,
    lineHeight: 22,
    color: '#514D47',
    textDecorationLine: 'line-through'
  },
  tab: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: 4,
    minWidth: 50,
  },
  tabLabel: {
    fontSize: 12,
    lineHeight: 22,
  },
  tabIcon: {
    marginRight: 4,
  }
});

const TaskListItem = ({ id, name, navigate, membersQuantity, prayedTotal, answered }) => (
  <View style={styles.task}>
    <View style={styles.colLeft}>
      <View style={styles.swatch} />
      <View style={styles.checkBox}>
        { answered ? <SvgUri style={styles.checkBoxFill} source={checkedIcon} /> : null}
      </View>
      <View style={styles.name}>
        <TouchableOpacity onPress={() => {navigate('Task', { taskId: id, taskName: name })}} >
          <Text style={[answered ? styles.nameTextAnswered : styles.nameText]} numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.colRight}>
      <View style={styles.tab}>
        <SvgUri style={styles.tabIcon} source={prayerIcon} width="17" height="20" />
        <Text style={styles.tabLabel}>
          {membersQuantity}
        </Text>
      </View>
      <View style={styles.tab}>
        <SvgUri style={styles.tabIcon} source={handsIcon} width="22" height="29" />
        <Text style={styles.tabLabel}>
          {prayedTotal}
        </Text>
      </View>
    </View>
  </View>
);

export default TaskListItem;
