import React from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList'
import FormAddTask from './components/form-add-task/FormAddTask'
import FormFilter from './components/form-filter/FormFilter'
import {mockInitItems,optionsDate} from './mockInitItems'
import sortInfo from './sortConfig'


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onClickSort = this.onClickSort.bind(this);

    this.state = {
      sortCols: [],
      initItems: [],
      filterText: '',
      filterDate: ''
    }
  }

  componentDidMount() {
    this.setState({
      sortCols: sortInfo.columns,
      initItems: localStorage.getItem("initItems") ? this.getItemLocalStorage() : mockInitItems,
      filterDate: ""
    })
  }

  getItemLocalStorage(){
    const localStorageItem = JSON.parse(localStorage.getItem("initItems"));
    return localStorageItem;
  }

  setItemLocalStorage(value){
    const localStorageItem =  JSON.stringify(value)
    localStorage.setItem('initItems', localStorageItem);
  }

  addTask(task,date) {
    if (task) {
      this.state.initItems.unshift({
        id: this.state.initItems.length + 1,
        task: task,
        date: new Date(date).toLocaleString("ru", optionsDate).toString(),
        done: true
      });
    } 
    this.setState({
      initItems: this.state.initItems,
    });
    this.setItemLocalStorage(this.state.initItems)
  }

  removeTask(value) {
    const results = this.state.initItems.filter(function (item) {
      return item.id !== value;
    });
    this.setState({
      initItems: results
    });
    this.setItemLocalStorage(results)
  }

  doneTask(value) {
    const results = this.state.initItems.map((item) => {
      if (item.id === value) {
        item.done = !item.done;
      }
      return item;
    })
    this.setState({
      initItems: results
    })
    this.setItemLocalStorage(results)
  }

  handleFilterChange(value, name) {
    this.setState({
      [name]: value
    });
  }

  getSortColByName(cols, name) {
    for (let i = 0; i < cols.length; i++) {
      if (cols[i].colName === name) {
        return cols[i];
      }
    };
    return null;
  }

  resetSort(cols, name) {
    for (let i = 0; i < cols.length; i++) {
      if (cols[i].colName !== name) {
        cols[i].sort = "";
      }
    };
  }

  onClickSort(colName) {
    const cols = this.state.sortCols;
    let col = this.getSortColByName(cols, colName);
    if (col.sort !== "") {
      if (col.sort === "Asc") {
        col.sort = "Desc";
      } else {
        col.sort = "Asc";
      }
    } else {
      col.sort = "Asc";
      this.resetSort(cols, colName);
    }

    const rows = this.state.initItems;
    col.funcSort(rows);
    this.setState({
      sortCols: cols
    });
  }

  render(){
    return (
      <div className="main">
        <div className="main-header">To-Do App</div>
        <FormAddTask 
          addTask={this.addTask} 
          filterDate = {this.state.filterDate}  />
        <FormFilter
          filterDate = {this.state.filterDate}  
          onFilterChange={this.handleFilterChange} />
        <TodoList 
          initItems = {this.state.initItems}
          filterText = {this.state.filterText}
          filterDate = {this.state.filterDate}
          removeTask = {this.removeTask}
          doneTask = {this.doneTask} 
          onClickSort = {this.onClickSort}
          sortCols={this.state.sortCols} />
      </div>
    )
  }
}

export default TodoApp;