import * as types from './../types';

export function setRedirectUrl(currentURL) {
    return {
        type: types.SET_REDIRECT_URL,
        data: currentURL
    };
}
