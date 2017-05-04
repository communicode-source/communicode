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
            alert('Submitted: ' + action.email);
            return action.email;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    subscription,
    filter,
    routing,
});

export default rootReducer;
