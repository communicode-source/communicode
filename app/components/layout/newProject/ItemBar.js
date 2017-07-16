import React from 'react';
import PropTypes from 'prop-types';

class ItemBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleItemSelect(e) {
        if(e.target.innerHTML === this.props.item) {
            return this.props.selectProjectItem('');
        }
        return this.props.selectProjectItem(e.target.innerHTML);
    }

    render() {
        return (
            <div>
                <p>Item Selector</p>
                <p>{(this.props.item !== '') ? `Currently is shows you have selected item: ${this.props.item}` : 'No item has been selected'}</p>
                <p onClick={this.handleItemSelect.bind(this)}>Something</p>
                <p onClick={this.handleItemSelect.bind(this)}>Something Else</p>
                <p onClick={this.handleItemSelect.bind(this)}>Another thing</p>
                <p onClick={this.handleItemSelect.bind(this)}>One more</p>
                <p onClick={this.handleItemSelect.bind(this)}>Just one more</p>
                <p onClick={this.handleItemSelect.bind(this)}>A tiny bit more</p>
                <p onClick={this.handleItemSelect.bind(this)}>Almost there</p>
                <p onClick={this.handleItemSelect.bind(this)}>A few more........</p>
            </div>
        );
    }
}

ItemBar.propTypes = {
    item: PropTypes.string,
    selectProjectItem: PropTypes.func
};

export default ItemBar;
