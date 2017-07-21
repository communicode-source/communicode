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

export function updateEdcuation(education) {
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
