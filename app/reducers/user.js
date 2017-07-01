import * as types from '../actions/types';

const user = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    provider: 'local',
    error: ''
}, action) => {
    switch(action.type) {
        case types.VALIDATE_EMAIL:
            return Object.assign({}, state, {
                email: action.data
            });
        case types.VALIDATE_PASSWORD:
            return Object.assign({}, state, {
                password: action.data
            });
        case types.UPDATE_PROVIDER:
            return Object.assign({}, state, {
                provider: action.data,
                accessToken: action.response.accessToken || '',
                tokenId: action.response.tokenId || '',
                name: action.response.name || action.response.profileObj.name || '',
                email: action.response.email || action.response.profileObj.email || '',
                imageUrl: action.imageUrl || '',
                userid: action.response.userID || ''
            });
        case types.ADD_LOCAL_USER_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data.msg,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.ADD_LOCAL_USER_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.ADD_GOOGLE_USER_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.ADD_GOOGLE_USER_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.ADD_FACEBOOK_USER_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.ADD_FACEBOOK_USER_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.GET_LOGGED_IN_LOCAL_STORAGE_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                profile: action.data.msg
            });
        case types.GET_LOGGED_IN_LOCAL_STORAGE_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.LOCAL_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data.msg,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data.msg,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.FACEBOOK_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                profile: action.data.msg,
                isFetching: false,
                isAuthenticated: true,
                error: ''
            });
        case types.LOCAL_LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.GOOGLE_LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.FACEBOOK_LOGIN_FAILED:
            return Object.assign({}, state, {
                profile: action.data.msg,
                isFetching: false,
                isAuthenticated: false,
                error: action.error.message
            });
        case types.UPDATE_NAME_SUCCESS:
            return {
                ...state,
                profile: action.data.msg
            };
        case types.UPDATE_NAME_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                error: action.error.message
            });
        case types.LOGOUT_USER:
            return {
                isFetching: false,
                isAuthenticated: false,
                provider: 'local'
            };
        default:
            return state;
    }
};


export default user;
