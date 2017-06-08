import { connect } from 'react-redux';
import { loginLocalUser, loginGoogleUser, loginFacebookUser } from '../actions';
import LoginModal from '../components/modals/LoginModal';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginLocal: (user) => dispatch(loginLocalUser(user)),
        onLoginFacebook: (user) => dispatch(loginFacebookUser(user)),
        onLoginGoogle: (user) => dispatch(loginGoogleUser(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);
