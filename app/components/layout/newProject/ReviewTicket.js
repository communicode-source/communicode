import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import { Row, Col } from 'react-bootstrap';

class ReviewTicket extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    render() {
        return (
            <div className={styles.question}>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h3>Review Your Project:</h3>
                        <ul>{this.props.project.title}</ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

ReviewTicket.propTypes = {
    project: PropTypes.object
};

export default ReviewTicket;
