import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class NPProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        this.props.getNonProfitProjects();
    }

    handleCompletedProjectClick(id) {
        this.props.checkProjectOff(id);
    }

    displaySkills(skills) {
        return skills.map((value, key) => {
            return <div className={styles.talents} key={key}>{value}</div>;
        });
    }

    build() {
        if(!this.props.projects || !this.props.projects.map || !this.props.projects[0]) {
            return null;
        }

        return this.props.projects.map((value, key) => {
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
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        {(this.props.id === value.nonprofitId && value.isCompleted === false) &&
                                            <p className={styles.needsCompletion} onClick={this.handleCompletedProjectClick.bind(this, value._id)}>Mark Complete</p>
                                        }
                                        {(this.props.id === value.nonprofitId && value.isCompleted === true) &&
                                            <p className={styles.completion} onClick={this.handleCompletedProjectClick.bind(this, value._id)}><i className={classNames('fa', 'fa-check')} aria-hidden="true"></i> Completed</p>
                                        }
                                    </Col>
                                    <Col xs={12} sm={4} md={4} lg={4}>
                                        <p className={classNames(styles.needsCompletion, styles.delete)} onClick={this.handleCompletedProjectClick.bind(this, value._id)}>Delete Project</p>
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

    render() {
        return (
            <div className={classNames(styles.projectsContainer, 'container')}>
                {this.build.call(this)}
            </div>
        );
    }
}

NPProject.propTypes = {
    projects: PropTypes.array,
    account: PropTypes.bool,
    id: PropTypes.string,
    getNonProfitProjects: PropTypes.func,
    checkProjectOff: PropTypes.func
};

export default NPProject;
