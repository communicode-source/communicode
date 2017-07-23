import React from 'react';
import styles from './../../../assets/css/pages/settings.scss';
import { FormGroup, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


class SaveButton extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSaveButtonClick(e) {
        e.preventDefault();
        this.props.onClickFunction();
    }

    render() {
        return (
            <FormGroup>
                <Col md={12}>
                    <Button className={styles.update} type="submit" onClick={this.handleSaveButtonClick.bind(this)}>
                        {this.props.title}
                    </Button>
                </Col>
            </FormGroup>
        );
    }

}

SaveButton.propTypes = {
    title: PropTypes.string,
    onClickFunction: PropTypes.func
};


export default SaveButton;
