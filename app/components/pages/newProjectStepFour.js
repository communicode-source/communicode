import React from 'react';
import NewProjectStepFour from './../../containers/newProjectStepFourContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectTalentsBar from './../../containers/newProjectTalentsBarContainer';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepFour = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectStepFour>
                <NewProjectTalentsBar />
                <NewProjectNextButton />
            </NewProjectStepFour>
        </div>
    </div>
);

export default StepFour;
