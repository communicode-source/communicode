import * as types from './types';

export function validateEmail(email) {
    return {
        type: types.VALIDATE_EMAIL,
        data: email
    };
}

export function validatePassword(password) {
    return {
        type: types.VALIDATE_PASSWORD,
        data: password
    };
}

export function registerLocalUser(user) {
    return {
        type: types.LOCAL_REGISTER_CLICK,
        data: user
    };
}

export function updateRegisterProvider(provider, response) {
    let imageUrl;
    if(provider === 'google') {
        imageUrl = response.profileObj.imageUrl;
    }
    else if(provider === 'facebook') {
        imageUrl = response.picture.data.url;
    }

    return {
        type: types.UPDATE_PROVIDER,
        data: provider,
        response: response,
        imageUrl: imageUrl
    };
}

export function registerGoogleUser(user) {
    return {
        type: types.GOOGLE_REGISTER_CLICK,
        data: user
    };
}

export function registerFacebookUser(user) {
    return {
        type: types.FACEBOOK_REGISTER_CLICK,
        data: user
    };
}

export function loginLocalUser(user) {
    return {
        type: types.LOCAL_LOGIN_CLICK,
        data: user
    };
}

export function loginGoogleUser(user) {
    return {
        type: types.GOOGLE_LOGIN_CLICK,
        data: user
    };
}

export function loginFacebookUser(user) {
    return {
        type: types.FACEBOOK_LOGIN_CLICK,
        data: user
    };
}

export function getLoggedInUser(isAuthenticated) {
    return {
        type: types.GET_LOGGED_IN_LOCAL_STORAGE,
        data: isAuthenticated
    };
}
