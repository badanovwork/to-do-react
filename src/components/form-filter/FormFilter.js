import React from 'react';
import './FormFilter.css';
import { connect } from 'react-redux'
import { onChangeFilterText, onChangeFilterDate } from '../../redux/actions'

class FormFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFilterText = this.onChangeFilterText.bind(this);
    this.onChangeFilterDate = this.onChangeFilterDate.bind(this);
  }

  onChangeFilterText(e) {
    this.props.onChangeFilterText(e.target.value);
  }

  onChangeFilterDate(e) {
    const reverseDate = e.target.value.split('-').reverse().join('.');
    this.props.onChangeFilterDate(reverseDate);
  }

  render() {
    const reverseDate = this.props.filterDate.split('.').reverse().join('-')
    return (
      <form className="formFilter">
        <label >Фильтр задач</label>
        <br />
        <label >по тексту:</label>
        <input type="text" value={this.props.filterText} onChange={this.onChangeFilterText} />
        <br />
        <label >по дате: </label>
        <input type="date" value={reverseDate} onChange={this.onChangeFilterDate}></input>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    filterText: state.filterText,
    filterDate: state.filterDate
  }
}

export default connect(mapStateToProps, { onChangeFilterText, onChangeFilterDate })(FormFilter);