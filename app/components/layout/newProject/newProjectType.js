import React from 'react';
import PropTypes from 'prop-types';

class TypeBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleTypeEnter(e) {
        this.props.onTypeEnter(e.target.value);
    }

    render() {
        return (
            <div>
                <p>What type of project:</p>
                <input onChange={this.handleTypeEnter.bind(this)} value={this.props.type} placeholder="Pick a type"/>
            </div>
        );
    }
}

TypeBox.propTypes = {
    type: PropTypes.string,
    onTypeEnter: PropTypes.func
};

export default TypeBox;
