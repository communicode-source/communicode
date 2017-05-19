import React from 'react';
import main from '../../styles/css/main.scss';
import modal from '../../styles/css/modals/notify.scss';
import common from '../../styles/css/pages/common.scss';
import classNames from 'classnames';


const primaryBtnClassnames = classNames(main['primary-btn'], main.btn, modal.button, modal.sendEmailBtn);

const NotifyModal = () =>
    <div className="modal fade" id="notify" tabIndex="-1" role="dialog" aria-labelledby="notifyLabel">
        <div className="modal-dialog" role="document">
            <div className={modal['modal-content']}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                    <h3 className="modal-title" id="myModalLabel">Stay In the Loop</h3>
                </div>
                <div id="mc_embed_signup">
                    <form action="//communicode.us15.list-manage.com/subscribe/post?u=bbb63083dbb4eed5b711d098c&amp;id=9119f49dfd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div className={main.text}>
                            <div className="modal-body">
                                <h4 className={modal['modal-body-text']}>Don't worry, we'll be here soon. And we can't do it without you.</h4>
                                <div className={classNames('input-group', modal['input-container'])}>
                                    <span className={classNames('input-group-addon', modal['email-addon'])} id="basic-addon1"><i
                                        className={classNames('fa', 'fa-envelope-o', modal.i)} aria-hidden="true"/></span>
                                    <input type="text" className={classNames('form-control', common.input, 'email')} value="" name="EMAIL" id="mce-EMAIL" placeholder="email address" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;" required/>
                                    <div style={{position: 'absolute', 'left': '-5000px'}} aria-hidden="true"><input type="text" name="b_bbb63083dbb4eed5b711d098c_9119f49dfd" tabIndex="-1" value="" /></div>
                                </div>
                            </div>
                            <div className={classNames('modal-footer', modal.footer)}>
                                <button id="mc-embedded-subscribe" type="submit" className={primaryBtnClassnames}>Help Us Change the World <i
                                    className="fa fa-arrow-right" aria-hidden="true"/></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>;

export default NotifyModal;
