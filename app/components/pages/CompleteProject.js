import React, { PropTypes } from 'react';
import NPProjects from './../../containers/profile/NPProjects';
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
        this.props.onGetComplete(this.props.projectId);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    getPaid(projectId) {
        this.props.requestPayment(projectId);
    }

    displaySkills(skills) {
        return skills.map((value, key) => {
            return <li className={styles.talents} key={key}>{value}</li>;
        });
    }

    slugify(text) {
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
    }

    generateProjects() {
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

        return this.props.project.map((value, key) => {
            const stripePart = (this.props.user.profile.customer.isCustomer === true) ? (<button onClick={this.getPaid.bind(this, value._id)}>Get Paid</button>) : (<div><a className={styles.complete} target="_blank" href={`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_B6CI5ITmnWyLofYoQezSrK6kPYgj1umM&scope=read_write&state=${localStorage.getItem('id_token')}`}>Create Stripe Account</a></div>);
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
                                        {(value.paid === false && value.isCompleted === true && value.totalCost !== null) && stripePart }
                                        {(value.paid === true && value.isCompleted === true && value.totalCost !== null) && <div className={styles.complete}>Payment Complete!</div> }
                                        {(value.paid === false && value.isCompleted === true && value.totalCost === null) && <div className={styles.complete}>Volunteer Project!</div> }
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
        let noProjectMessage = (<h4 className={styles.noProjects}>No Projects Found. <a href="/project/step/1">Start one now!</a></h4>);

        if(!this.props.user.accountType) {
            noProjectMessage = (<h4 className={styles.noProjects}>No Projects Found. <a href="/me/feed">Get a match now!</a></h4>);
        }

        if(!this.props.project) {
            return (
                <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                    <h1>Your Projects</h1>
                    <center>
                        {noProjectMessage}
                    </center>
                </div>
            );
        }

        if(this.props.user.profile.accountType === true) {
            return (
                <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                    <h1>Your Projects</h1>
                    <NPProjects />
                </div>
            );
        }
        return (
            <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                <h1 className={styles.projectTitle}>Your Projects</h1>
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
