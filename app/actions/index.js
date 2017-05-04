import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter,
    };
}

export function subscribeUser(email) {
    return {
        type: types.SUBSCRIBE,
        email
    };
}

export function sendSubscription(email) {
    return {
        type: types.SUBSCRIBE_USER,
        email
    };
}
