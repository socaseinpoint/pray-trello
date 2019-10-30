import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 4,
  }
})

const AppContent = ({children}) => <View style={styles.content}>{children}</View>;

export default AppContent;
