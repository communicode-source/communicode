import * as types from '../actions/types';

const project = (state = {}, action) => {
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
        default:
            return state;
    }
};

export default project;
