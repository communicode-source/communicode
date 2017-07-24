import * as types from './../types';

export function selectedProjectItem(item) {
    return {
        type: types.NEW_PROJECT_SELECT_ITEM,
        item
    };
}

export function selectedProjectTrack(track) {
    return {
        type: types.NEW_PROJECT_SELECT_TRACK,
        track
    };
}

export function projectTitleEnter(title) {
    return {
        type: types.NEW_PROJECT_TITLE_ENTER,
        title
    };
}

export function projectTypeSelection(select) {
    return {
        type: types.NEW_PROJECT_TYPE_SELECTION,
        select
    };
}

export function removeSkill(skill) {
    return {
        type: types.NEW_RPOJECT_REMOVE_SUGGESTED_SKILL,
        skill
    };
}

export function projectDescriptionEnter(description) {
    return {
        type: types.NEW_PROJECT_DESCRIPTION_ENTER,
        description
    };
}

export function selectStartDate(date) {
    return {
        type: types.NEW_PROJECT_START_DATE_SELECT,
        start: date
    };
}

export function selectEndDate(date) {
    return {
        type: types.NEW_PROJECT_END_DATE_SELECT,
        end: date
    };
}

export function selectTopic(topic) {
    return {
        type: types.NEW_PROJECT_SELECT_TOPIC,
        topic
    };
}

export function moveToStepOne() {
    return {
        type: types.STEP_1_NEW_PROJECT_BUTTON_PRESS
    };
}

export function moveToStepTwo() {
    return {
        type: types.STEP_2_NEW_PROJECT_BUTTON_PRESS
    };
}

export function moveToStepThree() {
    return {
        type: types.STEP_3_NEW_PROJECT_BUTTON_PRESS
    };
}

export function moveToStepFour() {
    return {
        type: types.STEP_4_NEW_PROJECT_BUTTON_PRESS
    };
}

export function moveToStepFive() {
    return {
        type: types.STEP_5_NEW_PROJECT_BUTTON_PRESS
    };
}

export function moveToNextStep(location) {
    const type = types[`STEP_${location + 1}_NEW_PROJECT_BUTTON_PRESS`];
    return {
        type
    };
}

export function finishNewProject() {
    return {
        type: types.FINISH_PROJECT_BUTTON_PRESS
    };
}

export function finishReviewNewProject(token) {
    return {
        type: types.FINISH_REVIEW_PROJECT_BUTTON_PRESS,
        data: token
    };
}
