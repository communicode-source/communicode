import React from 'react';
import NewProjectStepFour from './../../containers/newProjectStepFourContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectItemBar from './../../containers/newProjectItemBar';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import NewProjectTrackSelector from './../../containers/newProjectTrackSelector';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepFour = () => (
    <div className={classNames(styles.mainContent)}>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
        <div className={classNames('col-sm-12', 'col-md-8', 'col-lg-8')} >
            <NewProjectProgressBar />
            <NewProjectStepFour>
                <NewProjectItemBar />
                <NewProjectTrackSelector />
                <NewProjectNextButton />
            </NewProjectStepFour>
        </div>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
    </div>
);

export default StepFour;
