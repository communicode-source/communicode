import React, { PropTypes } from 'react';
import Checkout from './../layout/form/CompletedCheckout';
import CheckoutForm from './../layout/form/CompletedCheckoutForm';
import classNames from 'classnames';
import styles from './../../assets/css/pages/profile.scss';
// import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router';

class ProjectFeed extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.active = 'About';
    }

    componentDidMount() {
        this.props.onGetComplete(this.props.projectId);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    getPaid(projectId, token) {
        this.props.requestPayment(projectId, token);
    }

    render() {
        return (
            <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                <h1>Completed Projects</h1>
                {this.props.project &&
                    <div>
                        <h3>{this.props.project.title}</h3>
                        <div className={styles.createProjectWrapper}>
                            <Checkout submit={this.getPaid.bind(this, this.props.projectId)}>
                                <CheckoutForm />
                            </Checkout>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

ProjectFeed.propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    projectId: PropTypes.string,
    onGetComplete: PropTypes.func,
    requestPayment: PropTypes.func,
    project: PropTypes.object
};

export default ProjectFeed;
