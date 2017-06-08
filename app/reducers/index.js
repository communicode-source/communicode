import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch(action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const subscription = (state = '', action) => {
    switch(action.type) {
        case types.SUBSCRIBE:
            return action.email;
        case types.SUBSCRIBE_USER:
            return action.email;
        default:
            return state;
    }
};
const interests = (state = '', action) => {
    switch(action.type) {
        case types.CLICK_INTEREST_BOX:
            const newState = [...state];
            const index = newState.indexOf(action.title);
            if(index === -1) {
                newState.push(action.title);
                return newState;
            }
            newState.splice(index, 1);
            return newState;
const user = (state = '', action) => {
    switch(action.type) {
        case types.ADD_LOCAL_USER_SUCCESS:
            return action.data;
        case types.ADD_LOCAL_USER_FAILED:
            return false;
        case types.ADD_GOOGLE_USER_SUCCESS:
            return action.data;
        case types.ADD_GOOGLE_USER_FAILED:
            return false;
        case types.ADD_FACEBOOK_USER_SUCCESS:
            return action.data;
        case types.ADD_FACEBOOK_USER_FAILED:
            return false;
        default:
            return state;
    }
};

const error = (state = '', action) => {
    switch(action.type) {
        case action.VALIDATE_EMAIL:
            return action.email;
        case action.VALIDATE_PASSWORD:
            return action.password;
        case types.ADD_LOCAL_USER_FAILED:
            return action.error;
        case types.ADD_LOCAL_USER_SUCCESS:
            action.error = '';
            return action.error;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    subscription,
    filter,
    user,
    error,
    routing,
    interests,
});

export default rootReducer;
