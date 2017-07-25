import { combineReducers } from 'redux';

// Import reducers
import user from './user';
import interests from './interests';
import overlay from './overlay';
import redirect from './redirect';
import passwordRecovery from './passwordRecovery';
import routing from './routing';
import search from './search';
import project from './project';
import profile from './profile';
import isAuthenticated from './isAuthenticated';
import newProject from './newProject';
import settings from './settings';
import notifier from './notifier';

const rootReducer = combineReducers({
    user,
    routing,
    interests,
    redirect,
    overlay,
    passwordRecovery,
    isAuthenticated,
    newProject,
    search,
    project,
    settings,
    profile,
    notifier
});

export default rootReducer;
