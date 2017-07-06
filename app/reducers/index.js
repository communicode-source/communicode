import { combineReducers } from 'redux';

// Import reducers
import user from './user';
import interests from './interests';
import overlay from './overlay';
import redirect from './redirect';
import routing from './routing';


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

const rootReducer = combineReducers({
    user,
    routing,
    interests,
    redirect,
    overlay,
    search
});

export default rootReducer;
