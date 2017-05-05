import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter,
    };
}

export function validateEmail(email) {
    return {
        type: types.SUBSCRIBE,
        email
    };
}

export function sendSubscription(event, email) {
    event.preventDefault();
    return {
        type: types.SUBSCRIBE_USER,
        email
    };
}
