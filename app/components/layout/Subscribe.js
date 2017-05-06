import React from 'react';
import classNames from 'classnames';
import common from '../../styles/css/pages/common.scss';
import main from '../../styles/css/main.scss';

const Subscribe = () =>
    <div className="row">
        <div className={classNames('col-md-12', common['create-account'])}>
            <center>
                <div className={main.text}>
                    <h2>Convinced?</h2>
                    <h4>Don't worry, we'll be here soon. And we can't do it without you.</h4>
                    <div className={classNames('input-group', common['input-container'])}>
                        <span className={classNames('input-group-addon', common['email-addon'])} id="basic-addon1"><i className="fa fa-envelope-o" aria-hidden="true"/></span>
                        <input type="text" className={classNames('form-control', common.input)} placeholder="boring@probablygmail.com"
                               aria-describedby="basic-addon1"/>
                        <span className={classNames('input-group-btn', common['mail-submit'])}>
                            <button className={classNames('btn', main['primary-btn'])} type="button">
                                Help Us Change the World <i className="fa fa-arrow-right" aria-hidden="true"/>
                            </button>
                        </span>
                    </div>
                </div>
            </center>
        </div>
    </div>;

export default Subscribe;
