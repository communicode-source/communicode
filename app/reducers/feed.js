import * as types from '../actions/types';

const feed = (state = {
    isFetching: false,
    projects: []
}, action) => {
    switch(action.type) {
        case types.REQUEST_FEED:
            return {
                ...state,
                isFetching: true
            };
        case types.GET_FEED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                projects: action.data
            };
        case types.GET_FEED_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
};

export default feed;
