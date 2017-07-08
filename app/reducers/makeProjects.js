import * as types from './../actions/types';

const newProject = (state = {
    projectID: '',
    title: '',
    type: '',
    description: '',
    start: '',
    end: '',
    interestArea: '',
    possibleInterests: '',
    skills: [],
    skillsReady: false,
    coverImageURI: '',
    track: '',
    item: '',
    completed: [],
    trackOrItem: 'item',
    location: 1,
}, action) => {
    switch(action.type) {
        case types.NEW_PROJECT_SELECT_ITEM:
            return {...state, item: action.item, trackOrItem: 'item'};
        case types.NEW_PROJECT_SELECT_TRACK:
            return {...state, track: action.track, trackOrItem: 'track'};
        case types.NEW_PROJECT_TITLE_ENTER:
            return {...state, title: action.title};
        case types.NEW_PROJECT_TYPE_SELECTION:
            return {...state, type: action.type};
        case types.NEW_PROJECT_DESCRIPTION_ENTER:
            return {...state, description: action.description};
        case types.NEW_PROJECT_START_DATE_SELECT:
            return {...state, start: action.start};
        case types.NEW_PROJECT_END_DATE_SELECT:
            return {...state, end: action.end};
        case types.RECEIVED_AI_PREDICTED_SKILLS_FOR_NEW_PROJECT:
            return {...state, skills: action.skills, skillsReady: true};
        case types.API_NOT_READY_FOR_PREDICTED_SKILLS_OF_PROJECT:
            return {...state, skillsReady: false};
        case types.STEP_ONE_API_RECIEVED_SUCCESS:
            return {...state, projectID: action.id, completed: [...states.completed, 1]};
        case types.STEP_TWO_API_RECEIVED_SUCCESS:
            return {...state, completed: [...states.completed, 2]};
        case types.STEP_THREE_API_RECIEVED_SUCCESS:
            return {...state, completed: [...states.completed, 3]};
        case types.STEP_FOUR_API_RECIEVED_SUCCESS:
            return {...state, completed: [...states.completed, 4]};
        case types.STEP_ONE_API_RECIEVED_FAILED:
            const comp = [...states.completed];
            const indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 1);
            return {...state, completed: comp};
        case types.STEP_TWO_API_RECEIVED_FAILED:
            const comp = [...states.completed];
            const indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 2);
            return {...state, completed: comp};
        case types.STEP_THREE_API_RECIEVED_FAILED:
            const comp = [...states.completed];
            const indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 3);
            return {...state, completed: comp};
        case types.STEP_FOUR_API_RECIEVED_FAILED:
            const comp = [...states.completed];
            const indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 4);
            return {...state, completed: comp};
        case types.STEP_2_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 2};
        case types.STEP_3_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 3};
        case types.STEP_4_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 4};
        case types.FINISH_PROJECT_BUTTON_PRESS:
            return {...state};
        default:
            return state;
    }
};

export default newProject;
