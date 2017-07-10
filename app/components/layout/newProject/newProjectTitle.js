import React from 'react';
import PropTypes from 'prop-types';

class TitleBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleTitleEnter(e) {
        this.props.onTitleEnter(e.target.value);
    }

    render() {
        return (
            <div>
                <p>Give us a title:</p>
                <input onChange={this.handleTitleEnter.bind(this)} value={this.props.title} placeholder="Project Title" />
            </div>
        );
    }
}

TitleBox.propTypes = {
    title: PropTypes.string,
    onTitleEnter: PropTypes.func
};

export default TitleBox;
