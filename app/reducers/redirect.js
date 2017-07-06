import * as types from '../actions/types';

const redirect = (state = '', action) => {
    switch(action.type) {
        case types.SET_REDIRECT_URL:
            return Object.assign({}, state, {
                loginRedirectUrl: action.data
            });
        default:
            return state;
    }
};

export default redirect;
