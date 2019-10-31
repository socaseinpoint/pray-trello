import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    height: 50,
    paddingLeft: 52,
    paddingRight: 15,
    marginBottom: 15,
  }
})

const AddTask = () => (
  <View>
    <TextInput style={styles.input} />
  </View>
);

export default AddTask;
