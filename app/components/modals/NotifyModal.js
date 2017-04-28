import React from 'react';
import main from '../../styles/css/main.scss';
// import home from '../../styles/css/pages/home.scss';
import modal from '../../styles/css/modals/notify.scss';
import classNames from 'classnames';

const primaryBtnClassnames = classNames(main['primary-btn'], main.btn, modal.button);

const NotifyModal = () =>
  <div className="modal fade" id="notify" tabIndex="-1" role="dialog" aria-labelledby="notifyLabel">
    <div className="modal-dialog" role="document">
      <div className={modal['modal-content']}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 className="modal-title" id="myModalLabel">Stay In Touch</h3>
        </div>
        <div className="modal-body">
          <h4 className={modal['modal-body-text']}>Stay in touch and be notified of launch:</h4>
          <div className={classNames('input-group', modal['input-container'])}>
            <span className={classNames('input-group-addon', modal['email-addon'])} id="basic-addon1"><i className={classNames('fa', 'fa-envelope-o', modal.i)} aria-hidden="true"></i></span>
            <input type="text" className={classNames('form-control', modal.input)} placeholder="boring@probablygmail.com" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className={primaryBtnClassnames}>Save changes</button>
        </div>
      </div>
    </div>
  </div>;

export default NotifyModal;
