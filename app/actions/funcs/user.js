import * as types from './../types';


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
        provider: provider,
        response: response,
        imageUrl: imageUrl
    };
}

export function registerLocalUser(user) {
    return {
        type: types.LOCAL_REGISTER_CLICK,
        data: user
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

export function getLoggedInUser(isAuthenticated) {
    return {
        type: types.GET_LOGGED_IN_LOCAL_STORAGE,
        data: isAuthenticated
    };
}

export function logoutUser() {
    return {
        type: types.LOGOUT_USER
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

export function updateName() {
    return {
        type: types.UPDATE_NAME_CLICK
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

export function getProfileForUser(url) {
    return {
        type: types.GET_USER_PROFILE_FETCH,
        data: url
    };
}

export function sendSubscription(event, email) {
    event.preventDefault();
    return {
        type: types.SUBSCRIBE_USER,
        email
    };
}

export function getNonProfitProjects() {
    return {
        type: types.START_PROFILE_NP_PROJECTS_LOAD
    };
};

export function updateProjectToBeComplete(id) {
    return {
        type: types.CHECK_OFF_PROFILE_PROJECT,
        id
    };
};

export function deleteProjectNP(id) {
    return {
        type: types.BUTTON_CLICK_TO_DELETE_PROJECT,
        id
    };
};

export function uploadProfileImage(file) {
    return {
        type: types.UPLOAD_AVATAR_IMAGE,
        file
    };
}
