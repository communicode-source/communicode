import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

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
            <div className={styles.question}>
                <h4>Give it a description:</h4>
                <textarea value={this.props.description} onChange={this.handleDescriptionEnter.bind(this)} placeholder="New super awesome website..."/>
            </div>
        );
    }
}

DescriptionBox.propTypes = {
    description: PropTypes.string,
    onDescriptionEnter: PropTypes.func
};

export default DescriptionBox;
