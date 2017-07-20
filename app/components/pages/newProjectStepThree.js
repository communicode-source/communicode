import React from 'react';
import NewProjectStepThree from './../../containers/newProjectStepThreeContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import NewProjectDateSelectors from './../../containers/newProjectDateSelectorsContainer';
import NewProjectTopicSelector from './../../containers/newProjectTopicSelector';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepThree = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <NewProjectStepThree>
                <NewProjectDateSelectors />
                <NewProjectTopicSelector />
                <NewProjectNextButton />
            </NewProjectStepThree>
        </div>
    </div>
);

export default StepThree;
