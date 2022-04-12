import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ListOfPeople from './src/Components/ListOfPeople';
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ListOfPeople />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
