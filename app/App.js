import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Heading from './Heading';

export default class App extends Component {
  state = {
    inputValue: '',
    todos: [],
    type: 'ALL',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
