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

export function checkInterestsBox(title) {
    return {
        type: types.CLICK_INTEREST_BOX,
        title
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

export function overlayLoginModal(shouldShowModal) {
    return {
        type: types.OVERLAY_LOGIN_MODAL,
        data: shouldShowModal
    };
}

export function toggleRegisterBox() {
    return {
        type: types.OVERLAY_REGISTER_MODAL
    };
}

export function getLoggedInUser(isAuthenticated) {
    return {
        type: types.GET_LOGGED_IN_LOCAL_STORAGE,
        data: isAuthenticated
    };
}

export function setRedirectUrl(currentURL) {
    return {
        type: types.SET_REDIRECT_URL,
        data: currentURL
    };
}

export function logoutUser() {
    return {
        type: types.LOGOUT_USER
    };
}

export function overlayNameModal(shouldShowModal) {
    return {
        type: types.OVERLAY_NAME_MODAL,
        data: shouldShowModal
    };
}

export function updateName() {
    return {
        type: types.UPDATE_NAME_CLICK
    };
}

export function updateLname(lname) {
    return {
        type: types.UPDATE_USER_LNAME,
        lname
    };
}

export function updateFname(fname) {
    return {
        type: types.UPDATE_USER_FNAME,
        fname
    };
}

export function updateOrgname(orgname) {
    return {
        type: types.UPDATE_ORGANIZATION_NAME,
        orgname
    };
}

export function onEmailRecoveryEnter(text) {
    return {
        type: types.ENTERING_IN_RECOVERY_EMAIL,
        text
    };
}

export function onEmailRecoverySubmit() {
    return {
        type: types.SUBMIT_RECOVERY_EMAIL,
    };
}

export function onHashRecoveryEnter(text) {
    return {
        type: types.ENTERING_IN_URL_HASH,
        text
    };
}

export function onHashRecoverySubmit() {
    return {
        type: types.SUBMIT_HASHES_FOR_JWT,
    };
}

export function onNewPasswordRecoveryEnter(text) {
    return {
        type: types.ENTERING_NEW_PASSWORD,
        text
    };
}

export function onNewPasswordRecoverySubmit() {
    return {
        type: types.SUBMIT_NEW_PASSWORD,
    };
}

export function searchChange(input) {
    return {
        type: types.SEARCH_INPUT_CHANGE,
        data: input
    };
}
