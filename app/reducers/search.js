import * as types from '../actions/types';

const search = (state = [], action) => {
    switch(action.type) {
        case types.SEARCH_INPUT_SUCCESS:
            return action.data;
        case types.SEARCH_INPUT_FAILED:
            return action.error.message;
        default:
            return state;
    }
};
