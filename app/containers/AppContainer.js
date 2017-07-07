import { connect } from 'react-redux';
import { getLoggedInUser, overlayLoginModal, toggleRegisterBox } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        user: state.user,
        shouldShowLoginModal: state.overlay.shouldShowLoginModal,
        shouldShowRegisterModal: state.overlay.shouldShowRegisterModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetLoggedInUser: (isAuthenticated) => dispatch(getLoggedInUser(isAuthenticated)),
        showLoginModal: (shouldShowLoginModal) => dispatch(overlayLoginModal(shouldShowLoginModal)),
        toggleRegisterModal: () => dispatch(toggleRegisterBox())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
