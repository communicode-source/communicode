import React from 'react';
import PropTypes from 'prop-types';


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
            <div>
                <p>Pick dates to start and finish</p>
                <input onChange={this.handleStartDateEnter.bind(this)} value={this.props.startDate} type="date" placeholder="Start date" />
                <input onChange={this.handleEndDateEnter.bind(this)} value={this.props.endDate} type="date" placeholder="End data" />
            </div>
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
