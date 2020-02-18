import React from 'react';
import './FormFilter.css';

class FormFilter extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }
  
    handleFilterChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if(name === 'filterDate'){
           const arrStr = value.split("-").reverse().join(".");
           this.props.onFilterChange(arrStr, name);
        }else{
          this.props.onFilterChange(value, name);
        }
    }
      
    render (){
      const dateValue = this.props.filterDate.split(".").reverse().join("-")
      return(   
      <form className="formFilter" ref="formFilter">
        <label >Сортировка задач</label>
        <br/>
        <label >по тексту:</label>
        <input type="text" name="filterText" onChange={this.handleFilterChange}/>
        <br/>
        <label >по дате:      </label>
        <input type="date" value={dateValue} name="filterDate" onChange={this.handleFilterChange}></input>
      </form>
      )
    }
  }

export default FormFilter;