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
        console.log('running');
        this.mapNameToFunc[e.target.innerHTML]();
    }

    renderStart(place) {
        if(this.map[this.props.location - 1] === place) {
            return (<div onClick={this.handleLinkClick.bind(this)} className={classNames(styles.active)}>{place}</div>);
        }
        return (<div onClick={this.handleLinkClick.bind(this)} className={classNames(styles.inactive)}>{place}</div>);
    }

    render() {
        return (
            <div id={classNames(styles.steps)}>
                <a href="" className={classNames(styles.active)}>Start</a>
                <span> > </span>
                <a href="" className={classNames(styles.inactive)}>Info</a>
                <span> > </span>
                <a href="" className={classNames(styles.inactive)}>Details</a>
                <span> > </span>
                <a href="" className={classNames(styles.inactive)}>Finish</a>
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
