import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';

class About extends React.Component {
    constructor({fname, biography, skills = [], location, job, interests}) {
        super();
        this.fname = fname;
        this.biography = biography;
        this.skills = skills;
        this.interests = interests;
        this.location = location;
        this.job = job;
    }

    componentWillReceiveProps({fname, biography, skills = [], location, job, interests}) {
        this.fname = fname;
        this.biography = biography;
        this.skills = skills;
        this.interests = interests;
        this.location = location;
        this.job = job;
    }

    buildSkills() {
        const node = this.skills.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    buildInterests() {
        const node = this.interests.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    render() {
        return (
            <div id={classNames(styles.about)}>
                <div className={classNames(styles.item)}>
                    <h3>About</h3>
                    <hr />
                    <Form horizontal>
                        <FormGroup className={styles.formGroup}>
                            <Col className={classNames(styles.biography)} componentClass={ControlLabel} sm={12} md={12} lg={12}>
                                Biography &nbsp; <i className={classNames('fa', 'fa-commenting-o')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={12}>
                                <FormControl id={styles.biographyInput} componentClass="textarea" placeholder="Explain yourself..." />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Location &nbsp; <i className={classNames('fa', 'fa-location-arrow')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={6}>
                                <FormControl type="text" placeholder="City" />
                            </Col>
                            <Col sm={3}>
                                <FormControl type="text" placeholder="Country" />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Occupation &nbsp; <i className={classNames('fa', 'fa-map-marker')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Your Occupation" />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Education &nbsp; <i className={classNames('fa', 'fa-graduation-cap')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Your Education" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col md={12}>
                                <Button className={styles.update} type="submit">
                                    Update About Me
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>Social Media</h3>
                    <hr />
                    <Form horizontal>
                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Facebook &nbsp; <i className={classNames('fa', 'fa-facebook')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Facebook URL" />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Twitter &nbsp; <i className={classNames('fa', 'fa-twitter')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Twitter URL" />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                LinkedIn &nbsp; <i className={classNames('fa', 'fa-linkedin')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="LinkedIn URL" />
                            </Col>
                        </FormGroup>

                        <FormGroup className={styles.formGroup}>
                            <Col componentClass={ControlLabel} sm={3}>
                                Github &nbsp; <i className={classNames('fa', 'fa-github')} aria-hidden="true"></i>
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" placeholder="Github URL" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col md={12}>
                                <Button className={styles.update} type="submit">
                                    Update Social Media
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>Skills</h3>
                    <hr />

                    <div className={classNames(styles.btns)}>
                        {this.buildSkills.call(this)}
                    </div>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>Interests</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {this.buildInterests.call(this)} <Link to="/interests">Add More Interests...</Link>
                    </div>
                </div>
            </div>
        );
    }

}


export default About;
