import React from 'react';

class TodoRow extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }

    onClickClose() {
      const index = parseInt(this.props.index);
      this.props.removeTask(index);
    }

    onClickDone() {
      const index = parseInt(this.props.index);
      this.props.doneTask(index);
    }

    render() {
      const task = this.props.item;
      const taskDescription = task.done ? task.task : <span style={{color: 'red'}}>{task.task}</span>;
      const taskDate = task.date;
      return (
        <tr>
          <td onClick = {this.onClickDone}>{taskDescription}</td>
          <td>{taskDate}</td>
          <td><button type="button"  onClick={this.onClickClose}>&times;</button></td>
        </tr>
      )
    }
  }

export default TodoRow;