import React from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList'
import FormAddTask from './components/form-add-task/FormAddTask'
import FormFilter from './components/form-filter/FormFilter'
import { initItems, optionsDate } from './initItems'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.onChangeFilterText = this.onChangeFilterText.bind(this);
    this.onChangeFilterDate = this.onChangeFilterDate.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      taskItems: [],
      filterText: '',
      filterDate: ''
    }
  }

  componentDidMount() {
    this.setState({
      taskItems: localStorage.getItem("taskItems") ? this.getItemLocalStorage() : initItems,
    })
  }

  getItemLocalStorage() {
    return JSON.parse(localStorage.getItem("taskItems"));
  }

  setItemLocalStorage(value) {
    const localStorageItems = JSON.stringify(value)
    localStorage.setItem('taskItems', localStorageItems);
  }

  addTask(textValue, dateValue) {
    const results = this.state.taskItems;
    const lastTaskItem = this.state.taskItems.find(item => item.id >= this.state.taskItems.length)
    results.unshift({
      id: lastTaskItem.id + 1,
      task: textValue,
      date: new Date(dateValue).toLocaleString("ru", optionsDate).toString(),
      done: true
    });
    this.setState({
      taskItems: results,
    });
    this.setItemLocalStorage(this.state.taskItems)
  }

  removeTask(value) {
    const results = this.state.taskItems.filter(item => item.id !== value);
    this.setState({
      taskItems: results
    });
    this.setItemLocalStorage(results)
  }

  doneTask(value) {
    const results = this.state.taskItems.map(item => {
      if (item.id === value) {
        item.done = !item.done;
      }
      return item;
    })
    this.setState({
      taskItems: results
    })
    this.setItemLocalStorage(results)
  }

  onChangeFilterText(value) {
    this.setState({
      filterText: value
    });
  }

  onChangeFilterDate(value) {
    this.setState({
      filterDate: value
    });
  }
  update(data){
    this.setState(data)
  }

  render() {
    return (
      <div className="main">
        <div className="main-header">To-Do App</div>
        <FormAddTask
          addTask={this.addTask}
          filterDate={this.state.filterDate} />
        <FormFilter
          filterDate={this.state.filterDate}
          onChangeFilterDate={this.onChangeFilterDate}
          onChangeFilterText={this.onChangeFilterText} />
        <TodoList
          taskItems={this.state.taskItems}
          filterText={this.state.filterText}
          filterDate={this.state.filterDate}
          removeTask={this.removeTask}
          doneTask={this.doneTask} 
          update = {this.update}/>
      </div>
    )
  }
}

export default TodoApp;