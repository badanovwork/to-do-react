import React from 'react';
import './TodoList.css';

import TodoRow from '../todo-row/TodoRow'


class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.onClickSortText = this.onClickSortText.bind(this);
    this.onClickSortDate= this.onClickSortDate.bind(this);

    this.state = {
      sortText: null,
      sortDate: null,
    }
  }

  onClickSortText(){
    this.setState({
      sortText: !this.state.sortText
    })
  }

   onClickSortDate(){
    this.setState({
      sortDate: !this.state.sortDate
    })
  }

  render() {
  const rows = [];
  if(this.state.sortText){
    this.props.taskItems.sort(function (a, b) {
      return a.task.localeCompare(b.task)
    })
  }else {
    this.props.taskItems.sort(function (a, b) {
      return -a.task.localeCompare(b.task)
    })
  }

  if(this.state.sortDate){
    this.props.taskItems.sort(function (a, b) {
      return a.date.localeCompare(b.date)
    })
  }else {
    this.props.taskItems.sort(function (a, b) {
      return -a.date.localeCompare(b.date)
    })
  }

  this.props.taskItems.forEach((item) => {
    if (!item.task.toLowerCase().includes(this.props.filterText)) {
      return;
    }
    if (item.date !== this.props.filterDate && this.props.filterDate !== '') {
      return;
    }
    rows.push(
        <TodoRow 
            key = {item.id}
            item = {item}
            index = {item.id}
            removeTask={this.props.removeTask}
            doneTask={this.props.doneTask} />
    );
  });
  return (
      <table>
        <thead>
          <tr>
            <th onClick={this.onClickSortText}>name</th>
            <th onClick={this.onClickSortDate}>date</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default TodoList;