import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
// import PropTypes from 'prop-types';


class About extends React.Component {
    constructor({fname, biography, skills, location, job, interests}) {
        super();
        this.fname = fname;
        this.biography = biography;
        this.skills = skills;
        this.interests = interests;
        this.location = location;
        this.job = job;
    }

    componentWillReceiveProps({fname, biography, skills, location, job, interests}) {
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
        let interests = (<p key="loading" className={classNames(styles.button)}>Loading...</p>);
        let skills;
        let aboutBlock = (
            <div>
                <p>{this.biography}</p>
                <div className={classNames(styles.moreinfo)}>
                    <p><i className="fa fa-location-arrow" aria-hidden="true"></i> {this.location}</p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> {this.job}</p>
                </div>
            </div>
        );

        if(this.interests) {
            interests = this.buildInterests.call(this);
        }

        if(this.skills) {
            skills = this.buildSkills.call(this);

            if(this.skills.length < 1) {
                skills = (<p className={styles.notexist}>{this.fname} does not have any skills yet.</p>);
            }
        }

        if(!this.biography && !this.location && !this.job) {
            aboutBlock = (<p>{this.fname} has not updated this section.</p>);
        }

        return (
            <div id={classNames(styles.about)}>
                <div className={classNames(styles.item)}>
                    <h3>About</h3>
                    <hr />
                    {aboutBlock}
                </div>
                <div className={classNames(styles.item)}>
                    <h3>Skills</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {skills}
                    </div>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>Interests</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {interests}
                    </div>
                </div>
            </div>
        );
    }

}


export default About;
