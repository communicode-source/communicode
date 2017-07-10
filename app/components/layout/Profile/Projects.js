import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import ProjectCard from './ProjectCard';
import ProjectNoImageCard from './ProjectNoImageCard';

class Projects extends React.Component {
    constructor({started, completed, repos, projects}) {
        super();
        this.started = started;
        this.completed = completed;
        this.repos = repos;
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
                <div className={classNames(styles.projectContainer, 'row')}>
                    {this.repos.map(item => <ProjectNoImageCard github={item.github} website={item.website} description={item.description} name={item.name}/>)}
                </div>
                <div className="row" id={classNames(styles.pFlex)}>
                    {this.projects.map(item => <ProjectCard image={item.image} github={item.github} website={item.website} description={item.description} name={item.name}/>)}
                </div>
            </div>
          );
    }
}
export default Projects;
