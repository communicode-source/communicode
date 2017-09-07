import * as types from './../types';

export function onEmailRecoveryEnter(text) {
    return {
        type: types.ENTERING_IN_RECOVERY_EMAIL,
        text
    };
}

export function onEmailRecoverySubmit() {
    return {
        type: types.SUBMIT_RECOVERY_EMAIL,
    };
}

export function onHashRecoveryEnter(text) {
    return {
        type: types.ENTERING_IN_URL_HASH,
        text
    };
}

export function onHashRecoverySubmit() {
    return {
        type: types.SUBMIT_HASHES_FOR_JWT,
    };
}

export function onNewPasswordRecoveryEnter(text) {
    return {
        type: types.ENTERING_NEW_PASSWORD,
        text
    };
}

export function onNewPasswordRecoverySubmit() {
    return {
        type: types.SUBMIT_NEW_PASSWORD,
    };
}
