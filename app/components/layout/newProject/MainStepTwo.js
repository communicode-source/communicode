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
        if(this.props.location !== 2) {
            this.props.moveToStepTwo();
        }
    }

    render() {
        return (
            <div className={classNames(styles.mainContent)}>
                <h1 className={classNames(styles.leftAlignedHeader)}>Step 2: Info about your project</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepTwo: PropTypes.func
};

export default newProject;
