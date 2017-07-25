import * as types from './../types';

export function getUserFeed() {
    return {
        type: types.REQUEST_FEED,
    };
}
