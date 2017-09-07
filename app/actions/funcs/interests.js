import * as types from './../types';

export function checkInterestsBox(title) {
    return {
        type: types.CLICK_INTEREST_BOX,
        title
    };
}

export function loadInit() {
    return {
        type: types.INITIAL_INTERESTS_LOAD
    };
};

export function submitInterest(data) {
    return {
        type: types.UPDATE_INTERESTS_CLICK,
        data
    };
}
