import MainRecoveryPage from './../components/layout/PasswordRecovery';
import {connect} from 'react-redux';
import { onEmailRecoveryEnter, onEmailRecoverySubmit, onHashRecoveryEnter, onHashRecoverySubmit, onNewPasswordRecoveryEnter, onNewPasswordRecoverySubmit } from './../actions';

const mapStateToProps = (state) => {
    return {
        passwordRecovery: state.passwordRecovery,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEmailEnter: text => dispatch(onEmailRecoveryEnter(text)),
        onHashEnter: text => dispatch(onHashRecoveryEnter(text)),
        onPasswordEnter: text => dispatch(onNewPasswordRecoveryEnter(text)),
        onEmailSubmit: () => dispatch(onEmailRecoverySubmit()),
        onHashSubmit: () => dispatch(onHashRecoverySubmit()),
        onPasswordSubmit: () => dispatch(onNewPasswordRecoverySubmit())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainRecoveryPage);
