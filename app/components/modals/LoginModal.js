import React, { PropTypes } from 'react';
import LoginForm from '../layout/form/LoginForm';

const LoginModal = ({ onLoginLocal, onLoginGoogle, onLoginFacebook, error }) =>
    <div className="modal fade login" id="login">
        <div className="modal-dialog login animated">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Login for Communicode</h4>
                </div>

                <div className="modal-body">
                    <LoginForm methods={{onLoginFacebook, onLoginGoogle, onLoginLocal}} error={error} />
                </div>
            </div>
        </div>
    </div>;

LoginModal.propTypes = {
    onLoginLocal: PropTypes.func,
    onLoginGoogle: PropTypes.func,
    onLoginFacebook: PropTypes.func,
    error: PropTypes.string
};

export default LoginModal;
