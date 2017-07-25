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

    render() {
        return (
            <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                <h1>Completed Projects</h1>
            </div>
        );
    }
}

ProjectFeed.propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    projectId: PropTypes.string,
    deposit: PropTypes.func,
    onGetComplete: PropTypes.func
};

export default ProjectFeed;
