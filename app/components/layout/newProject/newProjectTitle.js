import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

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
            <div className={styles.question}>
                <h4>Give it a title:</h4>
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
