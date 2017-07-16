import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/createProject.scss';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 1) {
            this.props.moveToStepOne();
        }
    }

    render() {
        return (
            <div className={classNames(styles.mainContent)}>
                <h1 className={classNames(styles.leftAlignedHeader)}>Step 1: Start your project</h1>
                <h4>What are you looking for?</h4>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepOne: PropTypes.func
};

export default newProject;
