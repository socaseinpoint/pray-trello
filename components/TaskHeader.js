import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import arrowLeft from '../dist/icons/arrowLeft.svg';
import handsWhite from '../dist/icons/handsWhite.svg';

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingTop: 60,
    paddingBottom: 23,
    backgroundColor: '#BFB393',
  },
  nav: {
    flexDirection: 'row',
    marginBottom: 17,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 17,
    lineHeight: 27,
  },
})

const TaskHeader = ({title, goBack}) => {
  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => goBack(null)}>
          <SvgUri source={arrowLeft} width="22" height="29" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goBack(null)}>
          <SvgUri source={handsWhite} width="29" height="22" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default TaskHeader;
