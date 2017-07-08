import { connect } from 'react-redux';
import { loginLocalUser, loginGoogleUser, loginFacebookUser } from './../actions/funcs/user';
import { overlayLoginModal } from './../actions/funcs/overlay';
import LoginModal from '../components/modals/LoginModal';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
        shouldShowModal: state.overlay.shouldShowLoginModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginLocal: (user) => dispatch(loginLocalUser(user)),
        onLoginFacebook: (user) => dispatch(loginFacebookUser(user)),
        onLoginGoogle: (user) => dispatch(loginGoogleUser(user)),
        onOverlayLoginModal: (shouldShowModal) => dispatch(overlayLoginModal(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);
