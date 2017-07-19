import React from 'react';
import NewProjectStepFour from './../../containers/newProjectStepFourContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectTalentsBar from './../../containers/newProjectTalentsBarContainer';
import NewProjectFileUploader from './../../containers/newProjectFileUploader';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepFour = () => (
    <div className={classNames(styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectStepFour>
                <NewProjectTalentsBar />
                <NewProjectFileUploader />
                <NewProjectNextButton />
            </NewProjectStepFour>
        </div>
    </div>
);

export default StepFour;
