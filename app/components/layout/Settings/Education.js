import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Education extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleEducationChange(e) {
        this.props.onEducationEnter(e.target.value);
    }

    render() {
        return (
            <FormGroup className={styles.formGroup}>
                <Col componentClass={ControlLabel} sm={3}>
                    Education &nbsp; <i className={classNames('fa', 'fa-graduation-cap')} aria-hidden="true"></i>
                </Col>
                <Col sm={9}>
                    <FormControl type="text" placeholder="Your Education" value={this.props.education} onChange={this.handleEducationChange.bind(this)}/>
                </Col>
            </FormGroup>
        );
    }

}

Education.propTypes = {
    education: PropTypes.string,
    onEducationEnter: PropTypes.func
};


export default Education;
