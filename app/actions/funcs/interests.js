import * as types from './../types';

export function checkInterestsBox(title) {
    return {
        type: types.CLICK_INTEREST_BOX,
        title
    };
}
