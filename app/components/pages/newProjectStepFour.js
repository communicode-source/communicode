import React from 'react';
import NewProjectStepFour from './../../containers/newProjectStepFourContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectTalentsBar from './../../containers/newProjectTalentsBarContainer';
import NewProjectFileUploader from './../../containers/newProjectFileUploader';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepFour = () => (
    <div className={classNames(styles.mainContent)}>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
        <div className={classNames('col-sm-12', 'col-md-8', 'col-lg-8')} >
            <NewProjectProgressBar />
            <NewProjectStepFour>
                <NewProjectTalentsBar />
                <NewProjectFileUploader />
                <NewProjectNextButton />
            </NewProjectStepFour>
        </div>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
    </div>
);

export default StepFour;
