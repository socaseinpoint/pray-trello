import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

const DeskButton = ({ title, navigate, id }) => {
  function handlePress() {
    navigate('Task', {
      id,
    });
  }

  return (
    <View style={styles.button}>
      <Button title={title} onPress={handlePress} />
    </View>
  );
};

export default DeskButton;
