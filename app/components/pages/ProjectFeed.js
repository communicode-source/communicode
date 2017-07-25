import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../assets/css/pages/profile.scss';
import { Row, Col } from 'react-bootstrap';

class ProjectFeed extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.active = 'About';
    }

    componentDidMount() {
        this.props.onFeedLoad();
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    displaySkills(skills) {
        return skills.map((value, key) => {
            return <div className={styles.talents} key={key}>{value}</div>;
        });
    }

    render() {
        let projects;
        if(this.props.projects) {
            console.log(this.props.projects);
            projects = this.props.projects.map((value, key) => {
                return (
                    <Row className={styles.newProjectRow} key={key}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row>
                                <Col xs={12} sm={12} md={3} lg={3}>
                                    <div className={styles.projectType}>
                                        <i className={classNames('fa', 'fa-code')} aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={9} lg={9}>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <h3>{value.title}</h3>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} className={styles.skillsWrapper}>
                                            {this.displaySkills(value.skills)}
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <p className={styles.description}>{value.description}</p>
                                        </Col>
                                        <Col xs={12} sm={4} md={4} lg={4} />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                );
            });
        }
        return (
            <div className={classNames(styles.projectsContainer, 'container')}>
                {projects}
            </div>
        );
    }
}

ProjectFeed.propTypes = {
    error: PropTypes.string,
    onFeedLoad: PropTypes.func,
    user: PropTypes.object,
    projects: PropTypes.array,
    feed: PropTypes.object
};

export default ProjectFeed;
