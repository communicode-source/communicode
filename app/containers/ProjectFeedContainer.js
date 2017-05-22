
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Project from '../components/layout/dynamic/Project.js';
import { getProjectFeed } from '../actions';

const projects = [
    { id: 1, title: 'New Project Title', description: 'New project description' }
];

const ProjectFeedContainer = () => {
    let projectFeed = projects.map(p => {
        return (
            <li>
                <Project key={p.id} data={p} />
            </li>
        );
    });

    return (
        <ul>
          {projectFeed}
        </ul>
    );
};

ProjectFeedContainer.propTypes = {
    projects: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFeed: dispatch(getProjectFeed()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectFeedContainer);
