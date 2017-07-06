import * as types from '../actions/types';

const interests = (state = '', action) => {
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
        default:
            return state;
    }
};

export default interests;
