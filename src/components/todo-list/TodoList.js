import React from 'react';
import './TodoList.css';

import TodoRow from '../todo-row/TodoRow'
import SortButton from '../sort-button/SortButton'


class TodoList extends React.Component {
  render() {
  const rows = [];
  const filterText = this.props.filterText;
  const filterDate = this.props.filterDate;
  const onClick = this.props.onClickSort;
  this.props.initItems.forEach((item) => {
    if (!item.task.toLowerCase().includes(filterText)) {
      return;
    }
    if (item.date !== filterDate && filterDate !== '') {
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
  const sortCols = [];
  this.props.sortCols.forEach(function (item, index) {
    sortCols.push(
      <th key={index}>{item.colName}
        <SortButton colName={item.colName} sort={item.sort} onClickSort={onClick}/>
      </th>
    );
  });
  return (
      <table>
        <thead>
          <tr>
          {sortCols}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default TodoList;