import { combineReducers } from 'redux';

// Import reducers
import user from './user';
import interests from './interests';
import overlay from './overlay';
import redirect from './redirect';
import routing from './routing';


const rootReducer = combineReducers({
    user,
    routing,
    interests,
    redirect,
    overlay
});

export default rootReducer;
