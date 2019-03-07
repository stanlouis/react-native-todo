import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';

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

  deleteTodo = todoIndex => {
    let { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.todoIndex !== todoIndex),
    });
  };

  toggleComplete = todoIndex => {
    let { todos } = this.state;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos });
  };

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button submitTodo={this.submitTodo} />
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
