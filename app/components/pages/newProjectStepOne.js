import React from 'react';
import NewProjectStepOne from './../../containers/newProjectStepOneContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectItemBar from './../../containers/newProjectItemBar';
// import NewProjectTrackSelector from './../../containers/newProjectTrackSelector';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepOne = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectStepOne>
                <NewProjectItemBar />
                <NewProjectNextButton />
            </NewProjectStepOne>
        </div>
    </div>
);

// <NewProjectTrackSelector />

export default StepOne;
