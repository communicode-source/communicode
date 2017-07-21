import * as types from '../actions/types';

const settings = (state = {
    fetching: false,
    failed: false,
    msg: '',
    bio: '',
    city: '',
    country: '',
    job: '',
    education: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    github: '',
    skills: '',
    interests: ''
}, action) => {
    switch(action.type) {
        case types.TYPING_IN_SETTINGS_BIOGRAPHY:
            return {...state, bio: action.bio};
        case types.TYPING_IN_SETTINGS_LOCATION_CITY:
            return {...state, city: action.city};
        case types.TYPING_IN_SETTINGS_LOCATION_COUNTRY:
            return {...state, country: action.country};
        case types.TYPING_IN_SETTINGS_OCCUPATION:
            return {...state, job: action.job};
        case types.TYPING_IN_SETTINGS_EDUCATION:
            return {...state, education: action.education};
        case types.TYPING_IN_SETTINGS_FACEBOOK_URL:
            return {...state, facebook: action.facebook};
        case types.TYPING_IN_SETTINGS_TWITTER_URL:
            return {...state, twitter: action.twitter};
        case types.TYPING_IN_SETTINGS_LINKED_URL:
            return {...state, linkedin: action.linkedin};
        case types.TYPING_IN_SETTINGS_GITHUB_URL:
            return {...state, github: action.github};
        default:
            return state;
    }
};

export default settings;
