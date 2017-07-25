import * as types from './../types';

export function getUserFeed() {
    return {
        type: types.REQUEST_FEED,
    };
}

export function makeMatch({id}) {
    return {
        type: types.MAKE_MATCH,
        id
    };
};
