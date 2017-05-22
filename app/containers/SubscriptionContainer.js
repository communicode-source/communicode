import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateEmail, sendSubscription } from '../actions';
import classNames from 'classnames';
import common from '../styles/css/pages/common.scss';
import main from '../styles/css/main.scss';

const SubscriptionContainer = ( props ) => {
    let input;

    const {
      email,
      onValidate,
      onSubscribeSubmit
    } = props;

    return (

        <div className="row">
            <div className={classNames('col-md-12', common['create-account'])}>
                <center>
                    <form onSubmit={ (e) => onSubscribeSubmit(e, input.value) }>
                        <div className={main.text}>
                            <h2>Convinced?</h2>
                            <h4>Don't worry, we'll be here soon. And we can't do it without you.</h4>
                            <div className={classNames('input-group', common['input-container'])}>
                                <span className={classNames('input-group-addon', common['email-addon'])} id="basic-addon1"><i className="fa fa-envelope-o" aria-hidden="true"/></span>
                                <input type="text" className={classNames('form-control', common.input)} placeholder="boring@probablygmail.com"
                                 value={email} ref={node => {input = node;}} onChange={() => onValidate(input.value) } />
                                <span className={classNames('input-group-btn', common['mail-submit'])}>
                                    <button className={classNames('btn', main['primary-btn'], common.hiddenMobile)} type="submit">
                                        Help Us Change the World <i className="fa fa-arrow-right" aria-hidden="true"/>
                                    </button>
                                    <button className={classNames('btn', main['primary-btn'], common.hiddenDesktop)} type="submit">
                                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    );
};

SubscriptionContainer.propTypes = {
    email: PropTypes.string,
    onValidate: PropTypes.func,
    onSubscribeSubmit: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        email: state.email
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onValidate: email => dispatch(validateEmail(email)),
        onSubscribeSubmit: (event, email) => dispatch(sendSubscription(event, email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionContainer);
