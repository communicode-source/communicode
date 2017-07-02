import * as types from '../actions/types';
const passwordRecovery = (state = {
    email: '',
    hash: '',
    url: '',
    password: '',
    jwt: '',
    step: 0,
    isFetching: false,
    failed: false,
    errormsg: '',
    loadingmsg: ''
}, action) => {
    switch(action.type) {
        case types.ENTERING_IN_RECOVERY_EMAIL:
            return {...state, email: action.text};
        case types.SUBMIT_RECOVERY_EMAIL:
            return {...state, loadingmsg: 'Waiting for server response'};
        case types.RECOVERY_EMAIL_SUCCESS:
            return {...state, step: 1, hash: action.data, loadingmsg: '', errmsg: ''};
        case types.RECOVERY_EMAIL_FAILURE:
            return {...state, step: 0, errmsg: action.error, email: state.email, loadingmsg: ''};
        case types.ENTERING_IN_URL_HASH:
            return {...state, url: action.text};
        case types.SUBMIT_HASHES_FOR_JWT:
            return {...state, loadingmsg: 'Waiting for server response'};
        case types.SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_FAILED:
            return {...state, step: 1, errmsg: action.error, hash: state.hash, loadingmsg: ''};
        case types.SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_SUCCESS:
            return {...state, step: 2, jwt: action.data, errmsg: '', loadingmsg: '', password: ''};
        case types.ENTERING_NEW_PASSWORD:
            return {...state, password: action.text};
        case types.SUBMIT_NEW_PASSWORD:
            return {...state, step: 0};
        case types.RECOVERY_PASSWORD_FAILED:
            return {...state, step: 2, errormsg: action.error, loadingmsg: '', password: state.password};
        case types.RECOVERY_PASSWORD_SUCCESS:
            return {...state, step: 2, loadingmsg: 'Success! Go try it now!', password: ''};
        default:
            return state;
    }
};


export default passwordRecovery;
