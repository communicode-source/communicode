import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Occupation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleJobChange(e) {
        this.props.onOccupationEnter(e.target.value);
    }

    render() {
        return (
            <FormGroup className={styles.formGroup}>
                <Col componentClass={ControlLabel} sm={3}>
                    Occupation &nbsp; <i className={classNames('fa', 'fa-map-marker')} aria-hidden="true"></i>
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Your Occupation" value={this.props.occupation} onChange={this.handleJobChange.bind(this)}/>
                </Col>
            </FormGroup>
        );
    }

}

Occupation.propTypes = {
    occupation: PropTypes.string,
    onOccupationEnter: PropTypes.func
};


export default Occupation;
