import React from 'react';
// import main from '../../styles/css/main.scss';
// import modal from '../../styles/css/modals/notify.scss';
// import classNames from 'classnames';

// const primaryBtnClassnames = classNames(main['primary-btn'], main.btn, modal.button, modal.sendEmailBtn);

const LoginModal = () =>
    <div className="modal fade login" id="login">
        <div className="modal-dialog login animated">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Login with</h4>
                </div>

                <div className="modal-body loginBox">
                    <form>
                        <input type="text" placeholder="email" />
                        <input type="password" placeholder="password" />
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
    </div>;


export default LoginModal;
