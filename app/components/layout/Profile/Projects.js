import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import ProjectCard from './ProjectCard';
import ProjectNoImageCard from './ProjectNoImageCard';
import PortfolioCreationModal from './../../../containers/PortfolioCreationModalContainer';
import PropTypes from 'prop-types';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let repositories;
        let projects;
        if(this.props.reposi && this.props.reposi.map) {
            repositories = this.props.reposi.map((item, index) => <ProjectNoImageCard key={index} github={item.github} website={item.website} description={item.description} name={item.name}/>);
        }
        else {
            repositories = null;
        }

        if(this.props.projects && this.props.projects.map) {
            projects = this.projects.map((item, index) => <ProjectCard key={index} image={item.image} github={item.github} website={item.website} description={item.description} name={item.name}/>);
        }
        else {
            projects = null;
        }

        return (
            <div id={classNames(styles.portfolio)}>
                <div id={classNames(styles.numProj)}>
                    <div className={classNames(styles.left)}>
                        <h2>{this.props.started || 0}</h2>
                        <hr />
                        <h5>Projects Started</h5>
                    </div>
                    <div className={classNames(styles.right)}>
                        <h2>{this.props.completed || 0}</h2>
                        <hr />
                        <h5>Projects Completed</h5>
                    </div>
                </div>
                <div id={classNames(styles.createPortfolio)}>
                    <button onClick={ () => { this.props.overlayPortfolioCreateModal(); } } className={classNames('btn', 'btn-primary')}>
                        Add a New Project <i className={classNames('fa', 'fa-plus')} aria-hidden="true"></i>
                    </button>
                </div>
                <div className={classNames(styles.projectContainer)}>
                    {repositories}
                </div>
                <div className="row" id={classNames(styles.pFlex)}>
                    {projects}
                </div>

                <PortfolioCreationModal />
            </div>
          );
    }
}

Projects.propTypes = {
    started: PropTypes.string,
    completed: PropTypes.string,
    reposi: PropTypes.array,
    projects: PropTypes.array,
    overlayPortfolioCreateModal: PropTypes.func
};

export default Projects;
