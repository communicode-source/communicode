export const FILTER = 'FILTER';

export const SUBSCRIBE      = 'SUBSCRIBE';
export const SUBSCRIBE_USER = 'SUBSCRIBE_USER';

// INTERESTS PAGE ACTIONS
export const CLICK_INTEREST_BOX = 'TOGGLE_INTEREST_BOX';
export const INITIAL_INTERESTS_LOAD = 'INITIAL_INTERESTS_LOAD';
export const UPDATE_INTERESTS_TO_MATCH_PROFILE = 'UPDATE_INTERESTS_TO_MATCH_PROFILE';


export const VALIDATE_EMAIL    = 'VALIDATE_EMAIL';
export const VALIDATE_PASSWORD = 'VALIDATE_PASSWORD';

// USER REGISTRATION
export const REGISTER_LOCAL_USER    = 'REGISTER_LOCAL_USER';
export const ADD_LOCAL_USER_SUCCESS = 'ADD_LOCAL_USER_SUCCESS';
export const ADD_LOCAL_USER_FAILED  = 'ADD_LOCAL_USER_FAILED';
export const LOCAL_REGISTER_CLICK   = 'LOCAL_REGISTER_CLICK';
export const UPDATE_PROVIDER        = 'UPDATE_PROVIDER';

// GOOGLE REGISTRATION
export const REGISTER_GOOGLE_USER    = 'REGISTER_GOOGLE_USER';
export const ADD_GOOGLE_USER_SUCCESS = 'ADD_GOOGLE_USER_SUCCESS';
export const ADD_GOOGLE_USER_FAILED  = 'ADD_GOOGLE_USER_FAILED';
export const GOOGLE_REGISTER_CLICK   = 'GOOGLE_REGISTER_CLICK';

// FACEBOOK REGISTRATION
export const REGISTER_FACEBOOK_USER    = 'REGISTER_FACEBOOK_USER';
export const ADD_FACEBOOK_USER_SUCCESS = 'ADD_FACEBOOK_USER_SUCCESS';
export const ADD_FACEBOOK_USER_FAILED  = 'ADD_FACEBOOK_USER_FAILED';
export const FACEBOOK_REGISTER_CLICK   = 'FACEBOOK_REGISTER_CLICK';

/* -------------------   LOGIN STUFF   --------------------------------------------------- */
// Local Storage login
export const GET_LOGGED_IN_LOCAL_STORAGE = 'GET_LOGGED_IN_LOCAL_STORAGE';
export const GET_LOGGED_IN_LOCAL_STORAGE_FAILED = 'GET_LOGGED_IN_LOCAL_STORAGE_FAILED';
export const GET_LOGGED_IN_LOCAL_STORAGE_SUCCESS = 'GET_LOGGED_IN_LOCAL_STORAGE_SUCCESS';
export const SET_REDIRECT_URL = 'SET_REDIRECT_URL';
export const OVERLAY_LOGIN_MODAL = 'OVERLAY_LOGIN_MODAL';
export const LOGOUT_USER = 'LOGOUT_USER';

// Local login
export const LOCAL_LOGIN_CLICK = 'LOCAL_LOGIN_CLICK';
export const LOCAL_LOGIN_SUCCESS = 'LOCAL_LOGIN_SUCCESS';
export const LOCAL_LOGIN_FAILED = 'LOCAL_LOGIN_FAILED';

// Google Login
export const GOOGLE_LOGIN_CLICK = 'GOOGLE_LOGIN_CLICK';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILED = 'GOOGLE_LOGIN_FAILED';

// Facebook Login
export const FACEBOOK_LOGIN_CLICK = 'FACEBOOK_LOGIN_CLICK';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_FAILED = 'FACEBOOK_LOGIN_FAILED';

// Interests Page
export const OVERLAY_NAME_MODAL = 'OVERLAY_NAME_MODAL';
export const OVERLAY_REGISTER_MODAL = 'OVERLAY_REGISTER_MODAL';
export const UPDATE_NAME_CLICK = 'UPDATE_NAME_CLICK';
export const UPDATE_NAME_SUCCESS = 'UPDATE_NAME_SUCCESS';
export const UPDATE_NAME_FAILED = 'UPDATE_NAME_FAILED';
export const UPDATE_USER_FNAME = 'UPDATE_USER_FNAME';
export const UPDATE_USER_LNAME = 'UPDATE_USER_LNAME';
export const UPDATE_ORGANIZATION_NAME =  'UPDATE_ORGANIZATION_NAME';
export const UPDATE_INTERESTS_CLICK =  'UPDATE_INTERESTS_CLICK';
export const UPDATE_INTERESTS_SUCCESS =  'UPDATE_INTERESTS_SUCCESS';
export const UPDATE_INTERESTS_FAILED =  'UPDATE_INTERESTS_FAILED';

// Profile Page
export const GET_USER_PROFILE_FETCH = 'GET_USER_PROFILE_FETCH';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const OVERLAY_PORTFOLIO_CREATE_MODAL = 'OVERLAY_PORTFOLIO_CREATE_MODAL';
export const VALIDATE_PORTFOLIO_PROJECT_NAME = 'VALIDATE_PORTFOLIO_PROJECT_NAME';
export const CREATE_PORTFOLIO_PROJECT_CLICK = 'CREATE_PORTFOLIO_PROJECT_CLICK';
export const ATTACH_PROFILE_PROJECTS = 'ATTACH_PROFILE_PROJECTS';
export const START_PROFILE_NP_PROJECTS_LOAD = 'START_PROFILE_NP_PROJECTS_LOAD';
export const CHECK_OFF_PROFILE_PROJECT = 'CHECK_OFF_PROFILE_PROJECT';

// PROJECT FEED STUFF
export const REQUEST_FEED     = 'REQUEST_FEED';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILURE = 'GET_FEED_FAILURE';

// Password Recover Page
export const ENTERING_IN_RECOVERY_EMAIL = 'ENTERING IN AN EMAIL FOR RECOVERY';
export const SUBMIT_RECOVERY_EMAIL = 'CLICKED BUTTON TO SEND EMAIL TO RECOVERY EMAIL';
export const RECOVERY_EMAIL_SUCCESS = 'SUCCESSFULLY ADDED RECEIVED THE USER PASSWORD RECOVERY DATA';
export const RECOVERY_EMAIL_FAILURE = 'FAILED TO ALLOW USER TO RECOVERY BASE ON EMAIL';
export const ENTERING_IN_URL_HASH = 'ENTERING IN THE HASH FROM THE URL';
export const SUBMIT_HASHES_FOR_JWT = 'SUBMITTING THE HASH FROM THE URL FOR THE JWT';
export const SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_SUCCESS = 'SUCCESSFULLY EXCHANGED THE HASHES FOR JWT FOR PASSWORD RECOVERY';
export const SUBMITTED_HASHES_FOR_RECOVERED_PASSWORD_FAILED  = 'FAILED TO GET JWT FOR PASSWORD RECOVERY';
export const ENTERING_NEW_PASSWORD = 'ENTERING IN REPLACEMENT PASSWORD FOR RECOVERY';
export const SUBMIT_NEW_PASSWORD = 'SUBMITTING REPLACEMENT PASSWORD FOR CHANGE';
export const RECOVERY_PASSWORD_FAILED = 'FAILED TO SUBMIT NEW PASSWORD';
export const RECOVERY_PASSWORD_SUCCESS = 'SUCCESSFULLY UPDATE YOUR PASSWORD';

// SEARCH PAGE
export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_INPUT_SUCCESS = 'SEARCH_INPUT_SUCCESS';
export const SEARCH_INPUT_FAILED = 'SEARCH_INPUT_FAILED';

// CREATE A PROJECT PAGE
export const NEW_PROJECT_SELECT_ITEM = 'NEW_PROJECT_SELECT_ITEM';
export const NEW_PROJECT_SELECT_TRACK = 'NEW PROJECT SELECTING TRACK';
export const NEW_PROJECT_TITLE_ENTER = 'ENTERED A TITLE FOR THE NEW PROJECT';
export const NEW_PROJECT_TYPE_SELECTION = 'SELECTED A TYPE FOR THE NEW PROJECT';
export const NEW_PROJECT_DESCRIPTION_ENTER = 'ENTERING IN THE DESCRIPTION FOR A NEW PROJECT';
export const NEW_PROJECT_START_DATE_SELECT = 'SELECTED THE START DATE FOR A NEW PROJECT';
export const NEW_PROJECT_END_DATE_SELECT = 'SELECTED THE END DATE FOR A NEW PROJECT';
export const NEW_PROJECT_SELECT_TOPIC = 'NEW_PROJECT_SELECT_TOPIC';
export const RECEIVED_AI_PREDICTED_SKILLS_FOR_NEW_PROJECT = 'THE API HAS COME BACK WITH THE DATA FOR THE NECESSARY SKILLS';
export const API_NOT_READY_FOR_PREDICTED_SKILLS_OF_PROJECT = 'API HAS NOT FINISHED GETTING PREDICTED SKILLS YET';
export const STEP_ONE_API_RECEIVED_SUCCESS = 'THE API HAS SUCCESSFULLY RECEIVED NEW PROJECT DATA FOR STEP ONE';
export const STEP_TWO_API_RECEIVED_SUCCESS = 'THE API HAS SUCCESSFULLY RECEIEVD NEW PROJECT DATA FOR STEO TWO';
export const STEP_THREE_API_RECEIVED_SUCCESS = 'THE API HAS SUCCESSFULLY RECEIVED NEW PROJECT DATA FOR STEP THREE';
export const STEP_FOUR_API_RECEIVED_SUCCESS = 'THE API HAS SUCCESSFULLY RECEIVED NEW PROJECT DATA FOR STEP FOUR';
export const STEP_ONE_API_RECEIVED_FAILED = 'THE API HAS FAILED TO RECEIVE NEW PROJECT DATA FOR STEP ONE';
export const STEP_TWO_API_RECEIVED_FAILED = 'THE API HAS FAILED TO RECEIEVE NEW PROJECT DATA FOR STEO TWO';
export const STEP_THREE_API_RECEIVED_FAILED = 'THE API HAS FAILED TO RECEIVE NEW PROJECT DATA FOR STEP THREE';
export const STEP_FOUR_API_RECEIVED_FAILED = 'THE API HAS FAILED TO RECEIVE NEW PROJECT DATA FOR STEP FOUR';
export const STEP_1_NEW_PROJECT_BUTTON_PRESS = 'STEP ONE BUTTON PRESS FOR MAKING A PROJECT';
export const STEP_2_NEW_PROJECT_BUTTON_PRESS = 'STEP TWO BUTTON PRESS FOR MAKING A PROJECT';
export const STEP_3_NEW_PROJECT_BUTTON_PRESS = 'STEP THREE BUTTON PRESS FOR MAKING A PROJECT';
export const STEP_4_NEW_PROJECT_BUTTON_PRESS = 'STEP FOUR BUTTON PRESS FOR MAKING A PROJECT';
export const STEP_5_NEW_PROJECT_BUTTON_PRESS = 'STEP FIVE BUTTON PRESS FOR MAKING A PROJECT';

export const FINISH_PROJECT_BUTTON_PRESS = 'PRESSED BUTTON TO FINISH NEW PROJECT';
export const FINISH_REVIEW_PROJECT_BUTTON_PRESS = 'PRESSED BUTTON TO CONFIRM PROJECT CREATION';
export const FINISH_REVIEW_PROJECT_SUCCESS = 'SUCCESSFULLY CREATED PROJECT AND CHARGED USER';
export const FINISH_REVIEW_PROJECT_FAILED = 'COULD NOT CREATE PROJECT AND CHARGE USER';
export const NEW_RPOJECT_REMOVE_SUGGESTED_SKILL = 'NEW_RPOJECT_REMOVE_SUGGESTED_SKILL';


// SETTINGS PAGE
export const TYPING_IN_SETTINGS_BIOGRAPHY = 'TYPING_IN_SETTINGS_BIOGRAPHY';
export const TYPING_IN_SETTINGS_LOCATION_CITY = 'TYPING_IN_SETTINGS_LOCATION_CITY';
export const TYPING_IN_SETTINGS_LOCATION_COUNTRY = 'TYPING_IN_SETTINGS_LOCATION_COUNTRY';
export const TYPING_IN_SETTINGS_OCCUPATION = 'TYPING_IN_SETTINGS_OCCUPATION';
export const TYPING_IN_SETTINGS_EDUCATION = 'TYPING_IN_SETTINGS_EDUCATION';
export const TYPING_IN_SETTINGS_FACEBOOK_URL = 'TYPING_IN_SETTINGS_FACEBOOK_URL';
export const TYPING_IN_SETTINGS_TWITTER_URL = 'TYPING_IN_SETTINGS_TWITTER_URL';
export const TYPING_IN_SETTINGS_LINKED_URL = 'TYPING_IN_SETTINGS_LINKED_URL';
export const TYPING_IN_SETTINGS_GITHUB_URL = 'TYPING_IN_SETTINGS_GITHUB_URL';
export const TYPING_IN_SETTINGS_UPDATE_ABOUT_ME_CLICK = 'TYPING_IN_SETTINGS_UPDATE_ABOUT_ME_CLICK';
export const TYPING_IN_SETTINGS_UPDATE_SOCIALS_CLICK = 'TYPING_IN_SETTINGS_UPDATE_SOCIALS_CLICK';
export const TYPING_IN_NEW_FNAME_SETTINGS = 'TYPING_IN_NEW_FNAME_SETTINGS';
export const TYPING_IN_NEW_LNAME_SETTINGS = 'TYPING_IN_NEW_LNAME_SETTINGS';
export const SETTINGS_SKILL_CHANGE = 'SETTINGS_SKILL_CHANGE';
export const UPDATING_SETTINGS_FAILED = 'UPDATING_SETTINGS_FAILED';
export const LOADING_USER_INFO_INTO_THE_SETTINGS = 'LOADING_USER_INFO_INTO_THE_SETTINGS';
export const UPDATE_USER_SETTINGS_TO_MATCH_PROFILE = 'UPDATE_USER_SETTINGS_TO_MATCH_PROFILE';
export const SUCCESS_IN_UPDATING_SETTINGS = 'SUCCESS_IN_UPDATING_SETTINGS';
export const FAILED_AT_UPDATING_SETTINGS = 'FAILED_AT_UPDATING_SETTINGS';
export const LOAD_SKILLS_INTO_DB = 'LOAD_SKILLS_INTO_DB';
export const TYPING_IN_SETTINGS_ORGNAME = 'TYPING_IN_SETTINGS_ORGNAME';
export const TYPING_IN_SETTINGS_URL = 'TYPING_IN_SETTINGS_URL';
