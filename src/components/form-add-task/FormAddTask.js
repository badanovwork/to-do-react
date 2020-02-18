import React from 'react';
import './FormAddTask.css';

class FormAddTask extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onSubmit(e) {
      e.preventDefault();
      this.props.addTask(this.refs.itemName.value, this.refs.date.value);
    }
  
    render (){
      return(
        <form className="formAddTask" ref="formAddTask" onSubmit={this.onSubmit}>
          <input required type="text" ref="itemName" placeholder="добавить задачу ..."/>
          <br/>
          <input required type="date"  ref="date" name="addDate" ></input>
          <input type="submit" className="submit" value="добавить" />
        </form>
      )
    }
  }

export default FormAddTask;