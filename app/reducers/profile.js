import * as types from '../actions/types';

const profile = (state = {}, action) => {
    switch (action.type) {
        case types.GET_USER_PROFILE_FETCH:
            return {
                ...state,
                isFetching: true,
            };
        case types.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                ...action.data,
                isFetching: false
            };
        case types.ATTACH_PROFILE_PROJECTS:
            return {...state, projects: action.data};
        default:
            return state;
    }
};

export default profile;
