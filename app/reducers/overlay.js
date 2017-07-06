import * as types from '../actions/types';

const overlay = (state = {
    shouldShowLoginModal: false,
    shouldShowNameModal: true
}, action) => {
    switch (action.type) {
        case types.OVERLAY_LOGIN_MODAL:
            return Object.assign({}, state, {
                shouldShowLoginModal: action.data
            });
        case types.OVERLAY_NAME_MODAL:
            return Object.assign({}, state, {
                shouldShowNameModal: action.data
            });

        case types.UPDATE_NAME_SUCCESS:
            return {
                ...state,
                shouldShowNameModal: false
            };

        case types.LOGOUT_USER:
            return Object.assign({}, state, {
                shouldShowLoginModal: false
            });
        default:
            return state;
    }
};

export default overlay;
