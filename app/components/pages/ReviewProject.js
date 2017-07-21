import React from 'react';
import ReviewProject from './../../containers/ReviewProject';
import NewProjectNextButton from './../../containers/newProjectNextButton';
import classNames from 'classnames';
import styles from './../../assets/css/pages/createProject.scss';

const StepFour = () => (
    <div className={classNames('container', styles.page)}>
        <div>
            <NewProjectProgressBar />
            <ReviewProject>
                <NewProjectNextButton />
            </ReviewProject>
        </div>
    </div>
);

export default StepFour;
