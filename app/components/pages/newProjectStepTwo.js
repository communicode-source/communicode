import React from 'react';
import NewProjectStepTwo from './../../containers/newProjectStepTwoContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectTitleContainer from './../../containers/newProjectTitleContainer';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import NewProjectTypeSelector from './../../containers/newProjectTypeContainer';
import NewProjectDescriptionContainer from './../../containers/newProjectDescriptionContainer';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepTwo = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectStepTwo>
                <NewProjectTitleContainer />
                <NewProjectTypeSelector />
                <NewProjectDescriptionContainer />
                <NewProjectNextButton step={2}/>
            </NewProjectStepTwo>
        </div>
    </div>
);

export default StepTwo;
