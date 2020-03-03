import React from 'react';
import propTypes from 'prop-types'
import './TodoList.css';
import TodoRow from '../todo-row/TodoRow'
import { connect } from 'react-redux';
import { sortTodo } from '../../redux/actions'

class TodoList extends React.Component {

  filterTaskList() {
    const { taskItems, filterText, filterDate } = this.props;
    return taskItems
      .filter(item => (!filterDate || item.date === filterDate) && (!filterText || item.task.toLowerCase().includes(filterText.toLowerCase())))
      .map((item) => {
        return (<TodoRow key={item.id} item={item} index={item.id} />);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.props.sortTodo('task')}>Задача</th>
            <th onClick={() => this.props.sortTodo('date')}>Дата</th>
          </tr>
        </thead>
        <tbody>{this.filterTaskList()}</tbody>
      </table>
    )
  }
}

TodoList.propTypes = {
  taskItems: propTypes.arrayOf(propTypes.object),
  filterText: propTypes.string,
  filterDate: propTypes.string,
  task: propTypes.bool,
  date: propTypes.bool,
  sortTodo: propTypes.func
}

function mapStateToProps(state) {
  return {
    taskItems: state.todos,
    filterText: state.filterText,
    filterDate: state.filterDate,
    task: state.task,
    date: state.date
  }
}

export default connect(mapStateToProps, { sortTodo })(TodoList);