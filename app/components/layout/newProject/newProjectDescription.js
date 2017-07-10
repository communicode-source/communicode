import React from 'react';
import PropTypes from 'prop-types';

class DescriptionBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleDescriptionEnter(e) {
        this.props.onDescriptionEnter(e.target.value);
    }

    render() {
        return (
            <div>
                <p>Give a description</p>
                <textarea value={this.props.description} onChange={this.handleDescriptionEnter.bind(this)} />
            </div>
        );
    }
}

DescriptionBox.propTypes = {
    description: PropTypes.string,
    onDescriptionEnter: PropTypes.func
};

export default DescriptionBox;
