import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/createProject.scss';

class nextButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    getButtonText() {
        switch(this.props.location) {
            case 1:
                return 'Step 2';
            case 2:
                return 'Step 3';
            case 3:
                return 'Step 4';
            case 4:
                return 'Review and Create';
            default:
                break;
        };
        return 'Error';
    }

    handleNextPageClick() {
        this.props.moveToNextPage(this.props.location);
    }

    render() {
        return (
            <a onClick={this.handleNextPageClick.bind(this)} className={styles.nextStep}>
                {this.getButtonText()} <i className={classNames('fa', 'fa-arrow-right')} aria-hidden="true"></i>
            </a>
        );
    }
}

nextButton.propTypes = {
    location: PropTypes.number,
    moveToNextPage: PropTypes.func
};

export default nextButton;
