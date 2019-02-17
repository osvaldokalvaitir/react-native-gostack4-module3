import React from 'react';
import PropTypes from 'prop-types';

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
  return (
    <View style={styles.container}>
      {todos.map(todo => (
        <Text key={todo.id}>{todo.text}</Text>
      ))}
      <TouchableOpacity onPress={() => { addTodo('Fazer café novamente') }}>
        <Text>Adicionar todo</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
