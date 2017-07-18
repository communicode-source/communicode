import * as types from './../types';

export function checkInterestsBox(title) {
    return {
        type: types.CLICK_INTEREST_BOX,
        title
    };
}

export function submitInterest(data) {
    return {
        type: types.UPDATE_INTERESTS_CLICK,
        data
    };
}
