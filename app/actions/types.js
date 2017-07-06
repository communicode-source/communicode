export const FILTER = 'FILTER';

export const SUBSCRIBE      = 'SUBSCRIBE';
export const SUBSCRIBE_USER = 'SUBSCRIBE_USER';

// INTERESTS PAGE ACTIONS
export const CLICK_INTEREST_BOX = 'TOGGLE_INTEREST_BOX';

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
export const UPDATE_NAME_CLICK = 'UPDATE_NAME_CLICK';
export const UPDATE_NAME_SUCCESS = 'UPDATE_NAME_SUCCESS';
export const UPDATE_NAME_FAILED = 'UPDATE_NAME_FAILED';

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
