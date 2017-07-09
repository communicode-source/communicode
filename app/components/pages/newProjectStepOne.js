import React from 'react';
import NewProjectStepOne from './../../containers/newProjectStepOneContainer';
import NewProjectProgressBar from './../../containers/newProjectProgressBar';
import NewProjectItemBar from './../../containers/newProjectItemBar';
import NewProjectTrackSelector from './../../containers/newProjectTrackSelector';

const StepOne = () => (
    <NewProjectStepOne>
        <NewProjectProgressBar />
        <NewProjectItemBar />
        <NewProjectTrackSelector />
    </NewProjectStepOne>
);

export default StepOne;
