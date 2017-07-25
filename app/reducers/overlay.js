import * as types from '../actions/types';

const overlay = (state = {
    shouldShowLoginModal: false,
    shouldShowRegisterModal: false,
    shouldShowNameModal: true,
    shouldShowPortfolioCreateModal: false
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
        case types.LOCAL_LOGIN_SUCCESS:
            return {
                ...state,
                shouldShowLoginModal: false
            };
        case types.LOGOUT_USER:
            return Object.assign({}, state, {
                shouldShowLoginModal: false,
                shouldShowRegisterModal: false
            });
        case types.OVERLAY_PORTFOLIO_CREATE_MODAL:
            return {
                ...state,
                shouldShowPortfolioCreateModal: action.data
            };
        case types.OVERLAY_AVATAR_IMAGE_MODAL:
            return {
                ...state,
                shouldShowAvatarImageModal: action.data
            };
        case types.OVERLAY_REGISTER_MODAL:
            return {...state, shouldShowRegisterModal: state.shouldShowRegisterModal === false};
        default:
            return state;
    }
};

export default overlay;
