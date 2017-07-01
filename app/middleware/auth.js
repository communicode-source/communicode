import { browserHistory } from 'react-router';

const auth = store => next => action => {
    const state = store.getState();

    if(state.user.msg === null || state.user.msg === undefined) {
        return browserHistory.push('/home');
    }

    return next(action);
};

export default auth;
