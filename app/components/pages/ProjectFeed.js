import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../assets/css/pages/profile.scss';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

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
            return <li className={styles.talents} key={key}>{value}</li>;
        });
    }

    match(projectId, e) {
        e.preventDefault();
        const js = {
            id: projectId
        };
        this.props.makeMatch(js);
    }

    render() {
        let projects = (<div>Sorry, no projects yet! Come back later and spread the news so more Nonprofits join and post projects!</div>);
        const typeWidth = {
            'website': '40px',
            'issues': '10px',
            'setup': '40px',
            'mobile': '25px',
            'backend': '40px',
            'data': '45px',
            'branding': '40px',
            'prototyping': '40px',
            'socialmedia': '40px',
            'advertisements': '40px'
        };

        if(this.props.projects.length > 0) {
            projects = this.props.projects.map((value, key) => {
                if(!value.title || !value.description) {
                    return '';
                }
                const nonprofiturl = '/' + value.nonprofitId.url;
                let image = <img width={typeWidth[value.item.toLowerCase().replace(/\s/g, '')]} src={require(`./../../assets/images/icons/black/${value.item.toLowerCase().replace(/\s/g, '')}black.png`)} />;
                return (
                    <Row className={styles.newProjectRow} key={key}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    <div className={styles.projectType}>
                                        {image}
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={10}>
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <h3>{value.title}</h3>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <p>Posted By: <Link to={nonprofiturl}>{value.nonprofitId.organizationname}</Link></p>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} className={styles.skillsWrapper}>
                                            <ul className="list-inline">{this.displaySkills(value.skills)}</ul>
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <p className={styles.description}>{value.description}</p>
                                        </Col>
                                        <Col xs={12} sm={4} md={4} lg={4}>
                                            {(value.matched === false && value.confirmed === false) && <a onClick={this.match.bind(this, value._id)} className={styles.match}>Match Me <i className={classNames('fa', 'fa-heart-o')} aria-hidden="true"></i></a>}
                                            {(value.matched === true && value.potential._id !== this.props.userid) && <span>Another match in progress. Sorry!</span>}
                                            {(value.matched === true && value.potential._id === this.props.userid) && <span>Request Pending...<i className={classNames('fa', 'fa-heart')} aria-hidden="true"></i></span>}
                                            {(value.confirmed === true && value.potential && value.potential._id !== this.props.userid) && <span>Project has been taken!</span>}
                                            {(value.confirmed === true && value.potential && value.potential._id === this.props.userid) && <span className={styles.match}>Accepted <i className={classNames('fa', 'fa-heart')} aria-hidden="true"></i></span>}
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
            <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
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
    feed: PropTypes.object,
    matches: PropTypes.object,
    makeMatch: PropTypes.func,
    userid: PropTypes.string,
};

export default ProjectFeed;
