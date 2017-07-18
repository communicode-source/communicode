import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/createProject.scss';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.mapLocationToName = [
            'Start', 'Info', 'Details', 'Finish'
        ];
        this.mapNameToFunc = {
            Start: this.props.moveToStepOne,
            Info: this.props.moveToStepTwo,
            Details: this.props.moveToStepThree,
            Finish: this.props.moveToStepFour
        };
    }

    handleLinkClick(e) {
        e.preventDefault();
        this.mapNameToFunc[e.target.innerHTML]();
    }

    render() {
        return (
            <div id={classNames(styles.steps)}>
                <a href="#" onClick={this.handleLinkClick.bind(this)} className={classNames((this.props.location === 1) ? styles.active : styles.inactive)}>Start</a>
                <span> > </span>
                <a href="#" onClick={this.handleLinkClick.bind(this)} className={classNames((this.props.location === 2) ? styles.active : styles.inactive)}>Info</a>
                <span> > </span>
                <a href="#" onClick={this.handleLinkClick.bind(this)} className={classNames((this.props.location === 3) ? styles.active : styles.inactive)}>Details</a>
                <span> > </span>
                <a href="#" onClick={this.handleLinkClick.bind(this)} className={classNames((this.props.location === 4) ? styles.active : styles.inactive)}>Finish</a>
            </div>
        );
    }
}

ProgressBar.propTypes = {
    location: PropTypes.number,
    completed: PropTypes.array,
    moveToStepOne: PropTypes.func,
    moveToStepTwo: PropTypes.func,
    moveToStepThree: PropTypes.func,
    moveToStepFour: PropTypes.func
};

export default ProgressBar;
