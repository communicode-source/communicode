import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import PropTypes from 'prop-types';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    buildSkills() {
        if(!this.props.skills || !this.props.skills.map) {
            return null;
        }
        const node = this.props.skills.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    buildInterests() {
        if(!this.props.interests || !this.props.interests.map) {
            return null;
        }
        const node = this.props.interests.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    render() {
        let interests = (<p key="loading" className={classNames(styles.button)}>Loading...</p>);
        let skills;
        let aboutBlock;
        if(this.props.accountType === false) {
            aboutBlock = (
                <div>
                    <p>{this.props.biography || `${this.props.fname || 'Mr. Mysterious'} has not updated their bio yet.`}</p>
                    <div className={classNames(styles.moreinfo)}>
                        <p><i className="fa fa-location-arrow" aria-hidden="true"></i> {(this.props.location && this.props.location.map && this.props.location[0]) ? this.props.location[0] + ', ' + this.props.location[1] : `${this.props.fname || 'Mr. Mysterious'} has not updated this yet.`}</p>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.job || `${this.props.fname || 'Mr. Mysterious'} has not updated his job.`}</p>
                    </div>
                </div>
            );
        }
        else {
            aboutBlock = (
                <div>
                    <p>{this.props.biography || `${this.props.fname || 'Unknown Org'} has not updated their mission yet.`}</p>
                    <div className={classNames(styles.moreinfo)}>
                        <p><i className="fa fa-location-arrow" aria-hidden="true"></i> {(this.props.location && this.props.location.map && this.props.location[0]) ? this.props.location[0] + ', ' + this.props.location[1] : `${this.props.fname || 'Unknown Org'} has not updated this yet.`}</p>
                    </div>
                </div>
            );
        }
        if(this.props.interests) {
            interests = this.buildInterests.call(this);
        }

        if(this.props.skills) {
            skills = this.buildSkills.call(this);

            if(this.props.skills.length < 1) {
                skills = (<p className={styles.notexist}>{this.props.fname || 'Mr. Mysterious'} does not have any skills yet.</p>);
            }
        }

        if(!this.props.biography && !this.props.location && !this.props.job) {
            aboutBlock = (<p>{this.props.fname} has not updated this section.</p>);
        }

        return (
            <div id={classNames(styles.about)}>
                <div className={classNames(styles.item)}>
                    <h3>About</h3>
                    <hr />
                    {aboutBlock || null}
                    <br />
                </div>
                { (this.props.accountType === false) &&
                    <div className={classNames(styles.item)}>
                        <h3>Skills</h3>
                        <hr />
                        <div className={classNames(styles.btns)}>
                            {skills || null}
                        </div>
                    </div>
                }
                <div className={classNames(styles.item)}>
                    <h3>Interests</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {interests || null}
                    </div>
                </div>
            </div>
        );
    }

}

About.propTypes = {
    skills: PropTypes.array,
    interests: PropTypes.array,
    biography: PropTypes.string,
    location: PropTypes.array,
    job: PropTypes.string,
    fname: PropTypes.string,
    accountType: PropTypes.bool
};


export default About;
