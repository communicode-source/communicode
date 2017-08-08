import React, { PropTypes } from 'react';
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

    getPaid(projectId) {
        this.props.requestPayment(projectId);
    }

    generateProjects() {
        return this.props.project.map((proj, key) => {
            return (
                <div key={key}>
                    <h3>{proj.title}</h3>
                    <div className={styles.createProjectWrapper}>
                        {(proj.paid === false && proj.isCompleted === true) && <button onClick={this.getPaid.bind(this, proj._id)}>Get Paid</button>}
                    </div>
                    <hr />
                </div>
            );
        });
    }

    render() {
        if(!this.props.project) {
            return (
                <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                    <h1>Completed Projects</h1>
                    <h4>Loading...</h4>
                </div>
            );
        }
        return (
            <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                <h1>Completed Projects</h1>
                <hr />
                {this.generateProjects()}
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
    project: PropTypes.array
};

export default ProjectFeed;
