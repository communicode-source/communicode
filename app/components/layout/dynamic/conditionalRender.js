import React from 'react';
import PropTypes from 'prop-types';

export default class Notifier extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        if(this.props.render !== true) {
            return null;
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
};

Notifier.propTypes = {
    children: PropTypes.object,
    render: PropTypes.bool
};
