import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { View, StyleSheet } from 'react-native';
import DeskButton from './DeskButton';
import AppContent from './AppContent';

const styles = StyleSheet.create({
  desk: {
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  }
});

const Desk = ({ list, loading, error, navigate }) => {
  return (
    <View style={styles.desk}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <AppContent>
            {list.map((desk) => (
              <DeskButton
                key={desk.id}
                navigate={navigate}
                title={desk.name}
                id={desk.id}
              />
            ))}
          </AppContent>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Desk;
