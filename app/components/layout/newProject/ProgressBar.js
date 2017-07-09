import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <p>this is the Progress Bar.</p>
                <p>Currently it is showing you on step {this.props.location}</p>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    location: PropTypes.number,
    completed: PropTypes.array
};

export default ProgressBar;
