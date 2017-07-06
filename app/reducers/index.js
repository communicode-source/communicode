import { combineReducers } from 'redux';

// Import reducers
import user from './user';
import interests from './interests';
import overlay from './overlay';
import redirect from './redirect';
import passwordRecovery from './passwordRecovery';
import routing from './routing';
import search from './search';

const rootReducer = combineReducers({
    user,
    routing,
    interests,
    redirect,
    overlay,
    passwordRecovery,
    search
});

export default rootReducer;
