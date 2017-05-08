import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateUserEmail, validatePassword, registerLocalUser } from '../actions';

const RegisterContainer = ( props ) => {
    let emailInput;
    let passwordInput;

    const {
      email,
      password,
      onValidateEmail,
      onValidatePassword,
      onRegisterLocal
    } = props;

    return (
        <div className="modal fade login" id="login">
            <div className="modal-dialog login animated">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Login with</h4>
                    </div>

                    <div className="modal-body loginBox">
                        <form onSubmit={ (e) => onRegisterLocal(e, emailInput.value, passwordInput.value) }>
                            <input type="text" placeholder="email"
                                    value={email} ref={ node => {emailInput = node;}} onChange={() => onValidateEmail(emailInput.value)} />
                            <input type="password" placeholder="password"
                                    value={password} ref={ node => {passwordInput = node;}} onChange={() => onValidatePassword(passwordInput.value)} />
                            <button type="submit">Register</button>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <div className="forgot login-footer">
                            <span id="modalFooterContent"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

RegisterContainer.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    onValidateEmail: PropTypes.func,
    onValidatePassword: PropTypes.func,
    onRegisterLocal: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        email: state.email,
        password: state.password
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValidateEmail: email => dispatch(validateUserEmail(email)),
        onValidatePassword: password => dispatch(validatePassword(password)),
        onRegisterLocal: (event, email, password) => dispatch(registerLocalUser(event, {'email': email, 'password': password}))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
