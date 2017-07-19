import * as types from '../actions/types';

const project = (state = {
    newProjectName: ''
}, action) => {
    switch (action.type) {
        case types.VALIDATE_PORTFOLIO_PROJECT_NAME:
            return {
                ...state,
                newProjectName: action.data
            };
        default:
            return state;
    }
};

export default project;
