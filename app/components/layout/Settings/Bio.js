import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleBioChange(e) {
        this.props.onBioEnter(e.target.value);
    }

    render() {
        return (
            <FormGroup className={styles.formGroup}>
                <Col className={classNames(styles.biography)} componentClass={ControlLabel} sm={12} md={12} lg={12}>
                    Biography &nbsp; <i className={classNames('fa', 'fa-commenting-o')} aria-hidden="true"></i>
                </Col>
                <Col sm={12}>
                    <FormControl
                        id={styles.biographyInput}
                        componentClass="textarea"
                        placeholder="Explain yourself..."
                        value={this.props.biography}
                        onChange={this.handleBioChange.bind(this)}
                    />
                </Col>
            </FormGroup>
        );
    }

}

Bio.propTypes = {
    biography: PropTypes.string,
    onBioEnter: PropTypes.func
};


export default Bio;
