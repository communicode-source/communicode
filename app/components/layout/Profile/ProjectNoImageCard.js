import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';

class ProjectNoImageCard extends React.Component {
    constructor({github = null, website = null, description = null, name = null}) {
        super();
        this.description = description;
        this.name = name;
        this.github = github;
        this.website = website;
    }

    build() {
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
            <div className={classNames(styles.item, 'col-md-12')}>
                {this.build.call(this)}
            </div>
        );
    }
}
export default ProjectNoImageCard;
