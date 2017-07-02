import React from 'react';
import classNames from 'classnames';
import styles from '../profile.scss';
// import PropTypes from 'prop-types';


class About extends React.Component {
    constructor({fname, lname, biography, socials, skills, interests}) {
        super();
        this.fname = fname;
        this.lname = lname;
        this.biography = biography;
        this.socials = socials;
        this.skills = skills;
        this.interests = interests;
    }

    buildOnline() {
        const node = [];
        for(let i in this.socials) {
            if(typeof this.socials[i] === 'string') {
                continue;
            }
            node.push(<a href={this.socials[i]}>{i}</a>);
        }
        return node;
    }

    buildSkills() {
        const node = this.skills.map(item => <p className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    buildInterests() {
        const node = this.interests.map(item => <p className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    render() {
        return (
            <div id={classNames(styles.about)}>
                <div className={classNames(styles.item)}>
                    <h3>About {this.fname} {this.lname}</h3>
                    <hr />
                    <p>{this.biography}</p>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>{this.fname} Online</h3>
                    <hr />
                    {this.buildOnline.call(this)}
                </div>
                <div className={classNames(styles.item)}>
                    <h3>{this.fname}&#39;s Skills</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {this.buildSkills.call(this)}
                    </div>
                </div>
                <div className={classNames(styles.item)}>
                    <h3>{this.fname}&#39;s Interests</h3>
                    <hr />
                    <div className={classNames(styles.btns)}>
                        {this.buildInterests.call(this)}
                    </div>
                </div>
            </div>
        );
    }

}
export default About;
