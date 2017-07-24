import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import { Row, Col } from 'react-bootstrap';
import ProjectCheckout from '../form/ProjectCheckout';

class ReviewTicket extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    formatArray(arr) {
        let outStr = '';
        if (arr.length === 1) {
            outStr = arr[0];
        }
        else if (arr.length === 2) {
            outStr = arr.join(' and ');
        }
        else if (arr.length > 2) {
            outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
        }
        return outStr;
    }

    calculateServiceFee() {
        const price = this.props.project.priceWithService;

        return (price * 0.099).toFixed(2);
    }

    render() {
        return (
            <div className={styles.question}>
                <Row>
                    <Col className={styles.leftSide} xs={12} sm={12} md={6} lg={6}>
                        <h4>Make sure everything looks good:</h4>
                        <ol className={styles.ticketList}>
                            <li>Your Project Title: <p className={styles.propsValue}>{this.props.project.title}</p></li>
                            <li>Your Project Description: <p className={styles.propsValue}>{this.props.project.description}</p></li>
                            <li>Your Project Paragraph:
                                <p className={styles.propsValue}>Your project is a {this.props.project.type.replace(/([A-Z])/g, ' $1')}. It will appear in the feed of projects to be discovered by developers on {this.props.project.start} and it needs to be finished by {this.props.project.end}. It requires a knowledge of {this.formatArray(this.props.project.skills)}.</p>
                            </li>
                        </ol>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h4>Billing:</h4>
                        {this.props.project.price !== 'volunteer' &&
                            <div className={styles.createProjectWrapper}>
                                <ul className={styles.billingList}>
                                    <li>Price of Project: <span className={styles.price}>${this.props.project.price}</span></li>
                                    <li className={styles.addBottomBorder}>Services Fee <span>(what is this?)</span>: <span className={styles.price}>${this.calculateServiceFee()}</span></li>
                                    <li>Total: <span className={styles.price}>${this.props.project.priceWithService}</span></li>
                                </ul>
                                <ProjectCheckout finishProject={this.props.finishProject} price={this.props.project.priceWithService} />
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

ReviewTicket.propTypes = {
    project: PropTypes.object,
    finishProject: PropTypes.func
};

export default ReviewTicket;
