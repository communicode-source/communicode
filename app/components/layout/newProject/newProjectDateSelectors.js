import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';

class DatePickers extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleStartDateEnter(e) {
        this.props.selectStartDate(e.target.value);
    }

    handleEndDateEnter(e) {
        this.props.selectEndDate(e.target.value);
    }

    render() {
        return (
            <Row className={classNames(styles.question, styles.calendar)}>
                <Col xs={12} sm={12} md={6} lg={6} className={classNames(styles.date)}>
                    <h4>Start date:</h4>
                    <input onChange={this.handleStartDateEnter.bind(this)} value={this.props.startDate} type="date" placeholder="Start date" />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className={classNames(styles.date)}>
                    <h4>End date:</h4>
                    <input onChange={this.handleEndDateEnter.bind(this)} value={this.props.endDate} type="date" placeholder="End date" />
                </Col>
            </Row>
        );
    }
}

DatePickers.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    selectStartDate: PropTypes.func,
    selectEndDate: PropTypes.func
};

export default DatePickers;
