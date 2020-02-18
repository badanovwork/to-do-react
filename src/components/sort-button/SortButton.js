import React from 'react';

class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickSort = this.handleClickSort.bind(this);
    }

    handleClickSort(e) {
        this.props.onClickSort(this.props.colName);
    }

    render() {
        let name = "__";
        if (this.props.sort === "Asc") {
          name = "^";
        } else if (this.props.sort === "Desc") {
            name = "V";
        }
        return(
            <div>
                <button onClick={this.handleClickSort}>{name}</button>
            </div>
        );
    }
}

export default SortButton;