import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as TodoActions from '~/store/actions/todos';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

const TodoList = ({ todos, addTodo }) => {
  console.tron.log(todos);

  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <Text>{todo}</Text>
      ))}
      <TouchableOpacity onPress={() => { addTodo('Fazer café novamente') }}>
        <Text>Adicionar todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
