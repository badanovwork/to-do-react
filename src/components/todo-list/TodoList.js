import React from 'react';
import './TodoList.css';
import TodoRow from '../todo-row/TodoRow'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.sorted = { task: false, date: false };
  }

  onClickSort(type) {
    const { update, taskItems } = this.props;
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;
    const sorted = taskItems.sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      console.log(direction)
      return a[type] > b[type] ? direction : direction * -1;
    });
    this.sorted[type] = !isSorted;
    update({
      taskItems: sorted
    });
  }

  filterTaskList() {
    const { taskItems, filterText, filterDate, removeTask, doneTask } = this.props;
    return taskItems
      .filter(item => (!filterDate || item.date === filterDate) && (!filterText || item.task.toLowerCase().includes(filterText.toLowerCase())))
      .map((item) => {
        return (<TodoRow
          key={item.id}
          item={item}
          index={item.id}
          removeTask={removeTask}
          doneTask={doneTask} />);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.onClickSort('task')}>Задача</th>
            <th onClick={() => this.onClickSort('date')}>Дата</th>
          </tr>
        </thead>
        <tbody>{this.filterTaskList()}</tbody>
      </table>
    )
  }
}

export default TodoList;