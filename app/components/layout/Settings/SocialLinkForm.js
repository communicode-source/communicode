import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';


class SocialLinkInput extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleFormChange(e) {
        this.props.socialEnterFunc(e.target.value);
    }

    handleFormClick() {
        if(this.props.linkValue === '' && this.props.default) {
            this.props.socialEnterFunc(this.props.default);
        }
    }

    render() {
        return (
            <FormGroup className={styles.formGroup}>
                <Col componentClass={ControlLabel} sm={3}>
                    {this.props.socialText} &nbsp; <i className={classNames('fa', this.props.socialClass)} aria-hidden="true"></i>
                </Col>
                <Col sm={9}>
                    <FormControl
                        onClick={this.handleFormClick.bind(this)}
                        type="text"
                        placeholder={(this.props.noUrl === true) ? this.props.socialText : `${this.props.socialText} URL`}
                        value={this.props.linkValue}
                        onChange={this.handleFormChange.bind(this)}
                    />
                </Col>
            </FormGroup>
        );
    }

}

SocialLinkInput.propTypes = {
    socialText: PropTypes.string,
    socialClass: PropTypes.string,
    linkValue: PropTypes.string,
    socialEnterFunc: PropTypes.func,
    default: PropTypes.string,
    noUrl: PropTypes.bool,
};


export default SocialLinkInput;
