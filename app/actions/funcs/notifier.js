import * as types from './../types';

export function addToQueue(message) {
    return {
        type: types.ADD_NOTIF_TO_QUEUE,
        message
    };
};

export function removeOldestMessage() {
    return {
        type: types.REMOVE_CURRENT_FROM_QUEUE
    };
};
