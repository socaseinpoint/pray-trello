import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    color: '#514D47',
  }
});

const DeskButton = ({ title, navigate, id }) => {
  function handlePress() {
    navigate('TaskList', {
      id,
    });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeskButton;
