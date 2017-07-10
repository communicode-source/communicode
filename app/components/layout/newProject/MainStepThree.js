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
        if(this.props.location !== 3) {
            this.props.moveToStepThree();
        }
    }

    render() {
        return (
            <div className={classNames(styles.mainContent)}>
                <h1 className={classNames(styles.leftAlignedHeader)}>Step 3: More details about your project</h1>
                {this.props.children}
                <p>This would be a button to move on to the next step</p>
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepThree: PropTypes.func
};

export default newProject;
