import * as types from '../actions/types';

const interests = (state = [], action) => {
    switch(action.type) {
        case types.CLICK_INTEREST_BOX:
            const newState = [...state];
            const index = newState.indexOf(action.title);
            if(index === -1) {
                newState.push(action.title);
                return newState;
            }
            newState.splice(index, 1);
            return newState;
        case types.UPDATE_INTERESTS_TO_MATCH_PROFILE:
            const already = [...action.interests];
            return already;
        default:
            return state;
    }
};

export default interests;
