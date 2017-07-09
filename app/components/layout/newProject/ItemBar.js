import React from 'react';
import PropTypes from 'prop-types';

class ItemBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <p>Item Selector</p>
                <p>{(this.props.item !== '') ? `Currently is shows you have selected item: ${this.props.item}` : 'No item has been selected'}</p>
            </div>
        );
    }
}

ItemBar.propTypes = {
    item: PropTypes.string,
    selectProjectItem: PropTypes.func
};

export default ItemBar;
