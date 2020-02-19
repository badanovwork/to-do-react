import React from 'react';
import './TodoList.css';

import TodoRow from '../todo-row/TodoRow'


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onClickSortText = this.onClickSortText.bind(this);
    this.onClickSortDate = this.onClickSortDate.bind(this);

    this.state = {
      sortText: { isCurrent: null, desc: null },
      sortDate: { isCurrent: null, desc: null },
    }
  }

  onClickSortText() {
    if (this.state.sortDate.isCurrent) {
      this.setState({
        sortDate: { isCurrent: false, desc: null }
      });
    }

    this.setState({
      sortText: { isCurrent: true, desc: !this.state.sortText.desc }
    });
  }

  onClickSortDate() {
    if (this.state.sortText.isCurrent) {
      this.setState({
        sortText: { isCurrent: false, desc: null }
      });
    }

    this.setState({
      sortDate: { isCurrent: true, desc: !this.state.sortDate.desc }
    });
  }

  sortByText(desc) {
    if (desc) {
      this.props.taskItems.sort(function (a, b) {
        return a.task.localeCompare(b.task)
      });
      return;
    }

    this.props.taskItems.sort(function (a, b) {
      return -a.task.localeCompare(b.task)
    });
  }

  sortByDate(desc) {
    if (desc) {
      this.props.taskItems.sort(function (a, b) {
        return a.date.localeCompare(b.date)
      });
      return;
    }

    this.props.taskItems.sort(function (a, b) {
      return -a.date.localeCompare(b.date)
    });
  }

  render() {
    const rows = [];

    this.state.sortText.isCurrent
      ? this.sortByText(!this.state.sortText.desc)
      : this.sortByDate(!this.state.sortDate.desc);

    this.props.taskItems.forEach((item) => {
      if (!item.task.toLowerCase().includes(this.props.filterText)) {
        return;
      }
      if (item.date !== this.props.filterDate && this.props.filterDate !== '') {
        return;
      }
      rows.push(
        <TodoRow
          key={item.id}
          item={item}
          index={item.id}
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