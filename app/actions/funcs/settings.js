import * as types from './../types';


export function updateBiography(bio) {
    return {
        type: types.TYPING_IN_SETTINGS_BIOGRAPHY,
        bio
    };
};

export function updateCity(city) {
    return {
        type: types.TYPING_IN_SETTINGS_LOCATION_CITY,
        city
    };
};

export function updateCountry(country) {
    return {
        type: types.TYPING_IN_SETTINGS_LOCATION_COUNTRY,
        country
    };
};

export function updateOccupation(job) {
    return {
        type: types.TYPING_IN_SETTINGS_OCCUPATION,
        job
    };
};

export function updateEducation(education) {
    return {
        type: types.TYPING_IN_SETTINGS_EDUCATION,
        education
    };
};

export function updateFacebook(facebook) {
    return {
        type: types.TYPING_IN_SETTINGS_FACEBOOK_URL,
        facebook
    };
};

export function updateTwitter(twitter) {
    return {
        type: types.TYPING_IN_SETTINGS_TWITTER_URL,
        twitter
    };
};

export function updateLinkedin(linkedin) {
    return {
        type: types.TYPING_IN_SETTINGS_LINKED_URL,
        linkedin
    };
};

export function updateGithub(github) {
    return {
        type: types.TYPING_IN_SETTINGS_GITHUB_URL,
        github
    };
};

export function aboutClick() {
    return {
        type: types.TYPING_IN_SETTINGS_UPDATE_ABOUT_ME_CLICK
    };
};

export function socialsClick() {
    return {
        type: types.TYPING_IN_SETTINGS_UPDATE_SOCIALS_CLICK
    };
};

export function updateFname(fname) {
    return {
        type: types.TYPING_IN_NEW_FNAME_SETTINGS,
        fname
    };
};

export function updateLname(lname) {
    return {
        type: types.TYPING_IN_NEW_LNAME_SETTINGS,
        lname
    };
};


export function loadUserIntoSettings() {
    return {
        type: types.LOADING_USER_INFO_INTO_THE_SETTINGS,
    };
};

export function changeSkill(skill) {
    return {
        type: types.SETTINGS_SKILL_CHANGE,
        skill
    };
};

export function saveSkill(skill) {
    return {
        type: types.LOAD_SKILLS_INTO_DB,
        skill
    };
};


export function updateOrgname(name) {
    return {
        type: types.TYPING_IN_SETTINGS_ORGNAME,
        name
    };
};


export function updateUrl(url) {
    return {
        type: types.TYPING_IN_SETTINGS_URL,
        url
    };
};

export function uploadProfileImage(file) {
    return {
        type: types.UPLOAD_AVATAR_IMAGE,
        file
    };
}

export function uploadCoverImage(file) {
    return {
        type: types.UPLOAD_COVER_IMAGE,
        file
    };
}

export function removeStripeAccountClick() {
    return {
        type: types.UNLINK_STRIPE_ACCOUNT_BUTTON_CLICK
    };
}

export function checkCodeForUnlinking(code) {
    return {
        type: types.CHECK_UNLINK_CODE,
        code
    };
}

export function getMostRecentUser() {
    return {
        type: types.SUCCESS_IN_UPDATING_SETTINGS
    };
}
