import * as types from './../types';

export function searchChange(input) {
    return {
        type: types.SEARCH_INPUT_CHANGE,
        data: input
    };
}
