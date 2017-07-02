import { connect } from 'react-redux';

import { getLoggedInUser, overlayLoginModal } from 'actions';
import { App } from 'components';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        user: state.user,
        shouldShowLoginModal: state.overlay.shouldShowLoginModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetLoggedInUser: (isAuthenticated) => dispatch(getLoggedInUser(isAuthenticated)),
        showLoginModal: (shouldShowLoginModal) => dispatch(overlayLoginModal(shouldShowLoginModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
