import { connect } from 'react-redux';
import { registerLocalUser, registerGoogleUser } from '../actions';
import LoginModal from '../components/modals/LoginModal';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.error.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegisterLocal: (user) => dispatch(registerLocalUser(user)),
        onRegisterGoogle: (user) => dispatch(registerGoogleUser(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);
