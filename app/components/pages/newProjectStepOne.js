import React from 'react';
import NewProjectStepOne from './../../containers/newProjectStepOneContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectItemBar from './../../containers/newProjectItemBar';
import NewProjectTrackSelector from './../../containers/newProjectTrackSelector';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepOne = () => (
    <div className={classNames(styles.mainContent)}>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
        <div className={classNames('col-sm-12', 'col-md-8', 'col-lg-8')} >
            <NewProjectProgressBar />
            <NewProjectStepOne>
                <NewProjectItemBar />
                <NewProjectTrackSelector />
                <NewProjectNextButton />
            </NewProjectStepOne>
        </div>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
    </div>
);

export default StepOne;
