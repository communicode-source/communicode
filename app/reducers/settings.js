import * as types from '../actions/types';

const settings = (state = {
    fetching: false,
    failed: false,
    msg: '',
    biography: '',
    city: '',
    country: '',
    job: '',
    education: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    github: '',
    skills: [],
    interests: [],
    fname: '',
    lname: '',
    organizationname: '',
    url: '',
    errors: [],
}, action) => {
    switch(action.type) {
        case types.TYPING_IN_SETTINGS_BIOGRAPHY:
            return {...state, biography: action.bio};
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
        case types.TYPING_IN_NEW_FNAME_SETTINGS:
            return {...state, fname: action.fname};
        case types.TYPING_IN_NEW_LNAME_SETTINGS:
            return {...state, lname: action.lname};
        case types.UPDATE_USER_SETTINGS_TO_MATCH_PROFILE:
            const dataToSend = {...action.data};
            if(dataToSend.socials) {
                dataToSend.facebook = dataToSend.socials.facebook || '';
                dataToSend.github = dataToSend.socials.github || '';
                dataToSend.linkedin = dataToSend.socials.linkedin || '';
                dataToSend.twitter = dataToSend.socials.twitter || '';
            }
            if(dataToSend.location) {
                dataToSend.city = dataToSend.location[0] || '';
                dataToSend.country = dataToSend.location[1] || '';
            }
            return {...state, ...dataToSend};
        case types.SETTINGS_SKILL_CHANGE:
            const index = state.skills.indexOf(action.skill);
            const skills = [...state.skills];
            if(index === -1) {
                skills.push(action.skill);
            }
            else {
                skills.splice(index, 1);
            }
            return {...state, skills};
        case types.TYPING_IN_SETTINGS_ORGNAME:
            return {...state, organizationname: action.name};
        case types.TYPING_IN_SETTINGS_URL:
            return {...state, url: action.url};
        default:
            return state;
    }
};

export default settings;
