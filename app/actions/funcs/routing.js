import * as types from './../types';

export function logoutUser() {
    return {
        type: types.LOGOUT_USER
    };
}
