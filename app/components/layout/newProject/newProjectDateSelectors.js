import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker} from 'react-datepicker';

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
                <DatePicker
                />
                <DatePicker
                />
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

// placeholderText="End Date"
// minDate={new Date().setDate(new Date().getDate() + 1)}
// onChange={this.handleEndDateEnter.bind(this)}
// todayButton="Today"
// placeholderText="Start Date"
// minDate={new Date()}
// onChange={this.handleStartDateEnter.bind(this)}

export default DatePickers;
