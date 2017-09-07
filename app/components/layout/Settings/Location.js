import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Location extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleCityChange(e) {
        this.props.onCityEnter(e.target.value);
    }

    handleCountryChange(e) {
        this.props.onCountryEnter(e.target.value);
    }

    render() {
        return (
            <FormGroup className={styles.formGroup}>
                <Col componentClass={ControlLabel} sm={3}>
                    Location &nbsp; <i className={classNames('fa', 'fa-location-arrow')} aria-hidden="true"></i>
                </Col>
                <Col sm={6}>
                    <FormControl type="text" placeholder="City" value={this.props.city || ''} onChange={this.handleCityChange.bind(this)}/>
                </Col>
                <Col sm={3}>
                    <FormControl type="text" placeholder="Country" value={this.props.country || ''} onChange={this.handleCountryChange.bind(this)}/>
                </Col>
            </FormGroup>
        );
    }

}

Location.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    onCityEnter: PropTypes.func,
    onCountryEnter: PropTypes.func,
};


export default Location;
