import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router';

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

    handleDeleteProjectClick(id) {
        this.props.deleteProject(id);
    }

    displaySkills(skills) {
        return skills.map((value, key) => {
            return <li className={styles.talents} key={key}>{value}</li>;
        });
    }
    handleDecDev(id, decision) {
        this.props.NPMadeDecision(id, decision);
    }

    build() {
        const typeWidth = {
            'website': '40px',
            'issues': '10px',
            'setup': '40px',
            'mobile': '25px',
            'backend': '40px',
            'data': '45px',
            'branding': '40px',
            'prototyping': '40px',
            'socialmedia': '45px',
            'advertisements': '40px'
        };

        if(!this.props.projects || !this.props.projects.map || !this.props.projects[0]) {
            return null;
        }
        return this.props.projects.map((value, key) => {
            return (
                <Row className={styles.newProjectRow} key={key}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row>
                            <Col xs={12} sm={12} md={2} lg={2}>
                                <div className={styles.projectType}>
                                    <img width={typeWidth[value.item.toLowerCase().replace(/\s/g, '')]} src={require(`./../../../assets/images/icons/black/${value.item.toLowerCase().replace(/\s/g, '')}black.png`)} />
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={10} lg={10}>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <h3>{value.title}</h3>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} className={styles.skillsWrapper}>
                                        <ul className="list-inline">{this.displaySkills(value.skills)}</ul>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                        <p className={styles.description}>{value.description}</p>
                                    </Col>
                                    {(value.isActive === true && value.matched === false && value.confirmed === false || value.isDraft === true) &&
                                        <Col xs={12} sm={3} md={3} lg={3}>
                                            {(this.props.id === value.nonprofitId) &&
                                                <p className={classNames(styles.needsCompletion, styles.delete)} onClick={this.handleDeleteProjectClick.bind(this, value._id)}>Delete Project</p>
                                            }
                                        </Col>
                                    }
                                    {value.isDraft === false &&
                                        <Col xs={12} sm={3} md={3} lg={3}>
                                            {(this.props.id === value.nonprofitId && value.isCompleted === false && value.confirmed === true) &&
                                                <p className={styles.needsCompletion} onClick={this.handleCompletedProjectClick.bind(this, value._id)}>Mark Complete</p>
                                            }
                                            {(this.props.id === value.nonprofitId && value.isCompleted === true) &&
                                                <p className={styles.completion} onClick={this.handleCompletedProjectClick.bind(this, value._id)}><i className={classNames('fa', 'fa-check')} aria-hidden="true"></i> Completed</p>
                                            }
                                        </Col>
                                    }
                                    {(value.matched === true && value.isCompleted === false) &&
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <h4>{`${value.potential.fname} ${value.potential.lname} wants to match with you!`}</h4>
                                            <Col xs={12} sm={3} md={3} lg={3}>
                                                <p className={styles.completion} onClick={this.handleDecDev.bind(this, value._id, true)}>Accept!</p>
                                            </Col>
                                            <Col xs={12} sm={3} md={3} lg={3}>
                                                <Link target="_blank" onClick={() => null} to={`/${value.potential.url}`}><p className={styles.completion}>View profile</p></Link>
                                            </Col>
                                            <Col xs={12} sm={3} md={3} lg={3}>
                                                <p className={styles.completion} onClick={this.handleDecDev.bind(this, value._id, false)}>Reject!</p>
                                            </Col>
                                            <Col xs={12} sm={6} md={6} lg={6} />
                                        </Col>
                                    }
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
    checkProjectOff: PropTypes.func,
    deleteProject: PropTypes.func,
    NPMadeDecision: PropTypes.func
};

export default NPProject;
