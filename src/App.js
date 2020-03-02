import React from 'react';

import TodoList from './components/todo-list/TodoList'
import FormAddTask from './components/form-add-task/FormAddTask'
import FormFilter from './components/form-filter/FormFilter'

import './App.css';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-header">To-Do App</div>
        <FormAddTask />
        <FormFilter />
        <TodoList />
      </div>
    )
  }
}

export default connect(store => ({ todos: store.todos }))(TodoApp);