import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import PlusIcon from '../dist/icons/plus.svg';

const styles = StyleSheet.create({
  box: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: 50,
    paddingLeft: 52,
    paddingRight: 15,
    marginBottom: 15,
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 14,
  }
})

const AddTask = () => (
  <View style={styles.box}>
    <SvgUri style={styles.icon} source={PlusIcon} />
    <TextInput style={styles.input} />
  </View>
);

export default AddTask;
