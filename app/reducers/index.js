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
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    subscription,
    filter,
    routing,
    interests,
});

export default rootReducer;
