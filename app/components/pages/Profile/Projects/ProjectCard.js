import React from 'react';
import classNames from 'classnames';
import styles from '../profile.scss';

class ProjectCard extends React.Component {
    constructor({image = null, github = null, website = null, description = null, name = null}) {
        super();
        this.image = image;
        this.description = description;
        this.name = name;
        this.github = github;
        this.website = website;
    }

    buildPicture() {
        const links = [];
        if(this.github !== null) {
            links.push(<a href={this.github}><i className={classNames('fa', 'fa-github')} aria-hidden="true"/></a>);
        }
        if(this.website !== null) {
            links.push(<a href={this.website}><i className={classNames('fa', 'fa-globe')} aria-hidden="true"/></a>);
        }
        return (
            <div className={classNames(styles.item)}>
                <img src={this.image} alt="" />
                <div className={classNames(styles.info)}>
                    {links}
                </div>
            </div>
        );
    }

    buildNoPicture() {
        return (
            <div className={classNames(styles.item, styles.noPic, styles.item1)}>
                <h3>{this.name}</h3>
                <p>{this.description}</p>
                <div className={classNames(styles.btns)}>
                    <div className={classNames(styles.button)}>Github</div>
                    <div className={classNames(styles.button)}>Behance</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id={classNames(styles.pFlex)}>
                {(this.image !== null) ? this.buildPicture.call(this) : this.buildNoPicture.call(this)}
            </div>
        );
    }
}
export default ProjectCard;
