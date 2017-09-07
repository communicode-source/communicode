import * as types from './../actions/types';
import prices from '../components/layout/newProject/types/prices';
import keywords from '../components/layout/newProject/types/keywords';

const newProject = (state = {
    projectID: '',
    title: '',
    type: '',
    description: '',
    start: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2),
    end: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + (new Date().getDate() + 7)).slice(-2),
    interestArea: [],
    skills: [],
    skillsReady: false,
    coverImageURI: '',
    price: 'volunteer',
    priceWithService: 'volunteer',
    track: '',
    item: '',
    completed: [],
    trackOrItem: 'item',
    location: 1,
    errmsgs: []
}, action) => {
    let comp;
    let indexOfFail;
    switch(action.type) {
        case types.NEW_PROJECT_SELECT_ITEM:
            return {...state, item: action.item, trackOrItem: (action.item === '') ? 'track' : 'item', track: (action.item === '') ? state.track : ''};
        case types.NEW_PROJECT_SELECT_TRACK:
            return {...state, track: action.track, trackOrItem: (action.track === '') ? 'item' : 'track', item: (action.track === '') ? state.item : ''};
        case types.NEW_PROJECT_TITLE_ENTER:
            return {...state, title: action.title};
        case types.NEW_PROJECT_TYPE_SELECTION:
            return {
                ...state,
                type: action.select,
                price: (prices[action.select]),
                priceWithService: (prices[action.select] / 0.901).toFixed(2),
                skills: keywords[action.select],
            };
        case types.NEW_PROJECT_DESCRIPTION_ENTER:
            return {...state, description: action.description};
        case types.NEW_PROJECT_START_DATE_SELECT:
            return {...state, start: action.start};
        case types.NEW_PROJECT_END_DATE_SELECT:
            return {...state, end: action.end};
        case types.NEW_PROJECT_SELECT_TOPIC:
            const selectedInterests = [...state.interestArea];
            if(selectedInterests.indexOf(action.topic) === -1) {
                selectedInterests.push(action.topic);
            }
            else {
                selectedInterests.splice(selectedInterests.indexOf(action.topic), 1);
            }
            return {...state, interestArea: selectedInterests};
        case types.RECEIVED_AI_PREDICTED_SKILLS_FOR_NEW_PROJECT:
            return {...state, skills: action.skills, skillsReady: true};
        case types.NEW_RPOJECT_REMOVE_SUGGESTED_SKILL:
            const index = state.skills.indexOf(action.skill);
            if(index === -1 || state.skills.length <= 2) {
                return {...state};
            }
            const arrays = [...state.skills];
            arrays.splice(index, 1);
            return {...state, skills: arrays};
        case types.API_NOT_READY_FOR_PREDICTED_SKILLS_OF_PROJECT:
            return {...state, skillsReady: false};
        case types.STEP_ONE_API_RECEIVED_SUCCESS:
            return {...state, projectID: action.data, completed: [...state.completed, 1]};
        case types.STEP_TWO_API_RECEIVED_SUCCESS:
            return {...state, completed: [...state.completed, 2]};
        case types.STEP_THREE_API_RECIEVED_SUCCESS:
            return {...state, completed: [...state.completed, 3]};
        case types.STEP_FOUR_API_RECIEVED_SUCCESS:
            return {...state, completed: [...state.completed, 4]};
        case types.STEP_ONE_API_RECIEVED_FAILED:
            comp = [...state.completed];
            indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 1);
            comp.sort();
            return {...state, completed: comp};
        case types.STEP_TWO_API_RECEIVED_FAILED:
            comp = [...state.completed];
            indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 2);
            comp.sort();
            return {...state, completed: comp};
        case types.STEP_THREE_API_RECIEVED_FAILED:
            comp = [...state.completed];
            indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 3);
            comp.sort();
            return {...state, completed: comp};
        case types.STEP_FOUR_API_RECIEVED_FAILED:
            comp = [...state.completed];
            indexOfFail = comp.indexOf(1);
            comp.splice(indexOfFail, 4);
            comp.sort();
            return {...state, completed: comp};
        case types.STEP_1_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 1};
        case types.STEP_2_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 2};
        case types.STEP_3_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 3};
        case types.STEP_4_NEW_PROJECT_BUTTON_PRESS:
            return {...state, location: 4};
        case types.FINISH_PROJECT_BUTTON_PRESS:
            return {...state};
        case types.FINISH_REVIEW_PROJECT_SUCCESS:
            return {
                projectID: '',
                title: '',
                type: '',
                description: '',
                start: '',
                end: '',
                interestArea: [],
                skills: ['HTML', 'CSS', 'JavaScript', 'Backend', 'Database'],
                skillsReady: false,
                coverImageURI: '',
                price: 'volunteer',
                priceWithService: 'volunteer',
                track: '',
                item: '',
                completed: [],
                trackOrItem: 'item',
                location: 1,
                errmsgs: [],
                isLoading: false
            };
        case types.FINISH_VOLUNTEER_PROJECT:
            return {
                projectID: '',
                title: '',
                type: '',
                description: '',
                start: '',
                end: '',
                interestArea: [],
                skills: ['HTML', 'CSS', 'JavaScript', 'Backend', 'Database'],
                skillsReady: false,
                coverImageURI: '',
                price: 'volunteer',
                priceWithService: 'volunteer',
                track: '',
                item: '',
                completed: [],
                trackOrItem: 'item',
                location: 1,
                errmsgs: [],
                isLoading: false
            };
        case types.FINISH_REVIEW_PROJECT_BUTTON_PRESS:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default newProject;
