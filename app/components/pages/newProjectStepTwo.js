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
    <div className={classNames(styles.mainContent)}>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
        <div className={classNames('col-sm-12', 'col-md-8', 'col-lg-8')} >
            <NewProjectProgressBar />
            <NewProjectStepTwo>
                <NewProjectTitleContainer />
                <NewProjectTypeSelector />
                <NewProjectDescriptionContainer />
                <NewProjectNextButton />
            </NewProjectStepTwo>
        </div>
        <div className={classNames('col-sm-12', 'col-md-2', 'col-lg-2')} />
    </div>
);

export default StepTwo;
