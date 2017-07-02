import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';

const RegisterModal = ({ onValidateEmail, onValidatePassword, onRegisterLocal, onRegisterGoogle, onRegisterFacebook, onUpdateProvider, user, error }) =>
    <div className="modal fade login" id="register">
        <div className="modal-dialog login animated">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Register for Communicode</h4>
                </div>

                <div className="modal-body">
                    <RegisterForm
                        onValidateEmail={onValidateEmail}
                        onValidatePassword={onValidatePassword}
                        onUpdateProvider={onUpdateProvider}
                        onRegisterFacebook={onRegisterFacebook}
                        onRegisterGoogle={onRegisterGoogle}
                        onRegisterLocal={onRegisterLocal}
                        user={user}
                        error={error} />
                </div>
            </div>
        </div>
    </div>;

RegisterModal.propTypes = {
    onValidateEmail: PropTypes.func,
    onValidatePassword: PropTypes.func,
    onRegisterLocal: PropTypes.func,
    onRegisterFacebook: PropTypes.func,
    onRegisterGoogle: PropTypes.func,
    onUpdateProvider: PropTypes.func,
    user: PropTypes.object,
    error: PropTypes.string
};

export default RegisterModal;
