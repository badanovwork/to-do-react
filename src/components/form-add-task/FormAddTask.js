import React from 'react';
import './FormAddTask.css';

class FormAddTask extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      textValue: '',
      dateValue: ''
    }
  }

  onChangeText(e) {
    this.setState({ textValue: e.target.value });
  }

  onChangeDate(e) {
    this.setState({ dateValue: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.textValue, this.state.dateValue);
  }

  render() {
    return (
      <form className="formAddTask" onSubmit={this.onSubmit}>
        <input required type="text" value={this.state.textValue} onChange={this.onChangeText} placeholder="добавить задачу ..." />
        <br />
        <input required type="date" value={this.state.textDate} onChange={this.onChangeDate}></input>
        <input type="submit" className="submit" value="добавить" />
      </form>
    )
  }
}

export default FormAddTask;