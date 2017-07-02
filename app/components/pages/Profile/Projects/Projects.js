import React from 'react';
import classNames from 'classnames';

import styles from '../profile.scss';
import ProjectCard from './ProjectCard';

class Project extends React.Component {
    constructor({started, completed, projects}) {
        super();
        this.started = started;
        this.completed = completed;
        this.projects = projects;
    }

    render() {
        return (
            <div id={classNames(styles.portfolio)}>
                <div id={classNames(styles.numProj)}>
                    <div className={classNames(styles.left)}>
                        <h2>{this.started}</h2>
                        <hr />
                        <h5>Projects Started</h5>
                    </div>
                    <div className={classNames(styles.right)}>
                        <h2>{this.completed}</h2>
                        <hr />
                        <h5>Projects Completed</h5>
                    </div>
                </div>
                <div id={classNames(styles.pFlex)}>
                    {this.projects.map(item => <ProjectCard image={item.image} github={item.github} website={item.website} description={item.description} name={item.name}/>)}
                </div>
            </div>
          );
    }
}
export default Project;
