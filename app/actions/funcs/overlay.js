import * as types from './../types';

export function overlayLoginModal(shouldShowModal) {
    return {
        type: types.OVERLAY_LOGIN_MODAL,
        data: shouldShowModal
    };
}

export function overlayNameModal(shouldShowModal) {
    return {
        type: types.OVERLAY_NAME_MODAL,
        data: shouldShowModal
    };
}

export function logoutUser() {
    return {
        type: types.LOGOUT_USER
    };
}

export function toggleRegisterBox() {
    return {
        type: types.OVERLAY_REGISTER_MODAL
    };
}
