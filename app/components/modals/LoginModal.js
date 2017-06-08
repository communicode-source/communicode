import React, { PropTypes } from 'react';
import LoginForm from '../layout/form/LoginForm';

const LoginModal = ({ onRegisterLocal, onRegisterGoogle, onRegisterFacebook, error }) =>
    <div className="modal fade login" id="login">
        <div className="modal-dialog login animated">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Login with</h4>
                </div>

                <div className="modal-body">
                    <LoginForm onRegisterFacebook={onRegisterFacebook} onRegisterGoogle={onRegisterGoogle} onRegisterLocal={onRegisterLocal} error={error} />
                </div>
            </div>
        </div>
    </div>;

LoginModal.propTypes = {
    onRegisterLocal: PropTypes.func,
    onRegisterGoogle: PropTypes.func,
    onRegisterFacebook: PropTypes.func,
    error: PropTypes.string
};

export default LoginModal;
