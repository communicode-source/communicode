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

export function registerLocalUser(event, user) {
    event.preventDefault();
    return {
        type: types.LOCAL_REGISTER_CLICK,
        data: user
    };
}

export function validateUserEmail(email) {
    return {
        type: types.VALIDATE_EMAIL,
        email
    };
}

export function validatePassword(password) {
    return {
        type: types.VALIDATE_PASSWORD,
        password
    };
}
