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
            const stripePart = (this.props.user.profile.customer.isCustomer === true) ? (<button onClick={this.getPaid.bind(this, value._id)}>Get Paid</button>) : (<div>Make a strip account first from your settings page!</div>);
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
                                        {(value.paid === true && value.isCompleted === true && value.totalCost !== null) && <div>You should see the payment in your stripe account now!</div> }
                                        {(value.paid === false && value.isCompleted === true && value.totalCost === null) && <div>This was a volunteer project! Thank you!!</div> }
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
        if(!this.props.project) {
            return (
                <div id={styles.feed} className={classNames(styles.projectsContainer, 'container')}>
                    <h1>Completed Projects</h1>
                    <h4>Loading...</h4>
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
                <h1 className={styles.projectTitle}>Completed Projects</h1>
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
