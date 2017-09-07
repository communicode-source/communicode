import { connect } from 'react-redux';
import { validateEmail, validatePassword, updateRegisterProvider, registerLocalUser, registerGoogleUser, registerFacebookUser } from './../actions/funcs/user';
import RegisterModal from '../components/modals/RegisterModal';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
        provider: state.user.provider
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValidateEmail: (email) => dispatch(validateEmail(email)),
        onValidatePassword: (password) => dispatch(validatePassword(password)),
        onRegisterLocal: (user) => dispatch(registerLocalUser(user)),
        onRegisterFacebook: (user) => dispatch(registerFacebookUser(user)),
        onRegisterGoogle: (user) => dispatch(registerGoogleUser(user)),
        onUpdateProvider: (provider, response) => dispatch(updateRegisterProvider(provider, response))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterModal);
