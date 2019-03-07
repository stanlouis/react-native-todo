import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Heading from './Heading';
import Input from './Input';


let todoIndex = 0;

export default class App extends Component {
  state = {
    inputValue: '',
    todos: [],
    type: 'ALL',
  };

  inputChange = inputValue => {
    console.log('Input Value: ', inputValue);
    this.setState({ inputValue });
  };

  submitTodo = () => {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state);
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
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
