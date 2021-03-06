import { LOCATION_CHANGE } from 'react-router-redux';
import * as types from '../actions/types';

const initialState = { locationBeforeTransitions: null };

function routing(state = initialState, action) {
    // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
    if (action.type === LOCATION_CHANGE) {
        return { ...state, locationBeforeTransitions: action.payload };
    }

    if (action.type === types.LOGOUT_USER) {
        let location = state.locationBeforeTransitions;
        const pathname = '/';
        location = { ...location, pathname, action: 'PUSH' };
        return { ...state, locationBeforeTransitions: location };
    }

    if(action.type === types.LOCAL_LOGIN_SUCCESS) {
        let location = state.locationBeforeTransitions;
        const pathname = '/' + action.data.msg.url;
        location = { ...location, pathname, action: 'PUSH' };
        return { ...state, locationBeforeTransitions: location };
    }

    if(action.type === types.UPDATE_INTERESTS_SUCCESS) {
        let location = state.locationBeforeTransitions;
        const pathname = '/' + action.data.msg.url;
        location = { ...location, pathname, action: 'PUSH' };
        return { ...state, locationBeforeTransitions: location };
    }


    if(action.type === types.ADD_LOCAL_USER_SUCCESS || action.type === types.ADD_GOOGLE_USER_SUCCESS || action.type === types.ADD_FACEBOOK_USER_SUCCESS) {
        let location = state.locationBeforeTransitions;
        const pathname = '/interests';
        location = { ...location, pathname, action: 'PUSH' };
        return { ...state, locationBeforeTransitions: location };
    }

    if(action.type === types.STEP_1_NEW_PROJECT_BUTTON_PRESS) {
        const pathname = '/project/step/1';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.STEP_2_NEW_PROJECT_BUTTON_PRESS) {
        const pathname = '/project/step/2';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.STEP_3_NEW_PROJECT_BUTTON_PRESS) {
        const pathname = '/project/step/3';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.STEP_4_NEW_PROJECT_BUTTON_PRESS) {
        const pathname = '/project/review';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.FINISH_REVIEW_PROJECT_SUCCESS || action.type === types.FINISH_VOLUNTEER_PROJECT) {
        const pathname = '/' + action.data.msg.url;
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.RECOVERY_PASSWORD_SUCCESS) {
        const pathname = '/';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    if(action.type === types.GET_USER_PROFILE_FAILURE) {
        const pathname = '/404';
        const location = {...state.locationBeforeTransitions, pathname, action: 'PUSH'};
        return {...state, locationBeforeTransitions: location};
    }

    return state;
}

export default routing;
