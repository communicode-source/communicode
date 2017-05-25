import React, { PropTypes } from 'react';
import * as classes from '../../../styles/classes/LoginModal';
import * as rules from '../../../rules';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import LoginSlider from '../draggable/LoginSlider';

const LoginForm = ( props ) => {
    let data = {
        email: '',
        password: '',
        provider: 'local'
    };

    const {
      onRegisterLocal,
      onRegisterFacebook,
      onRegisterGoogle,
      error
    } = props;

    return (

        <div id={classes.MODAL_ID}>
            <div className={classes.ROW}>
                <div className={classes.AUTH_ICON}><i className={classes.FACEBOOK_ICON} aria-hidden="true"></i></div>
                <div className={classes.AUTH_ICON}><i className={classes.GOOGLE_ICON} aria-hidden="true"></i></div>
                <div className={classes.AUTH_ICON}><i className="fa fa-github" aria-hidden="true"></i></div>
                <GoogleLogin
                  clientId="42299952850-v2ofgh81ngrahtp8djhh1rf6j65cqgj3.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={response => { data.accessToken = response.accessToken; data.provider = 'google'; data.tokenId = response.tokenId; }}
                  onFailure={response => { return response; }}
                />
                <FacebookLogin
                  appId="164246817399322"
                  fields="name,email,picture"
                  callback={response => { data.accessToken = response.accessToken; data.user = {name: response.name, email: response.email, userid: response.userID}; data.provider = 'facebook'; }}
                  />
            </div>
            {data.provider === 'local' ? (
                <form>
                    <div className={classes.INPUT_FIELD}>
                        <div className={classes.INPUT_LABEL}>
                            <h6 className={classes.INPUT_LABEL_NAME}>Email</h6>
                            <h6 className={classes.INPUT_LABEL_ERROR}>{error}</h6>
                        </div>
                        <input type="text" placeholder="Email"
                          ref={ node => {data.email = node;}}
                          maxLength={`${rules.MAX_EMAIL_LENGTH}`}/>
                    </div>
                    <div className={classes.INPUT_FIELD}>
                        <div className={classes.INPUT_LABEL}>
                            <h6 className={classes.INPUT_LABEL_NAME}>Password</h6>
                        </div>
                        <input type="password" placeholder="Password"
                          ref={ node => {data.password = node;}}
                          maxLength={`${rules.MAX_PASSWORD_LENGTH}`} />
                    </div>
                </form>
            ) : <h2>Somebody is using social logins</h2> }
            <div id={classes.SLIDER_MAIN}>
                <div id={classes.LABEL_CONT}>
                    <h6><i className={classes.ARROW_LEFT} aria-hidden="true"></i>Developer</h6>
                    <h6 className={classes.NONPROFIT_SLIDE}>Non-profit<i className={classes.ARROW_RIGHT} aria-hidden="true"></i></h6>
                </div>
                <div id={classes.HANDLER}>
                    <LoginSlider registerData={data} methods={{onRegisterLocal, onRegisterFacebook, onRegisterGoogle}} />
                    <div id={classes.LEFT_SIDE}></div>
                </div>
            </div>
        </div>
    );
};

// Error Syntax: <h6 className={classes.INPUT_LABEL_ERROR}>Invalid Email</h6>
// <LoginSlider data={emailInput, passwordInput} onClick={() => handleRegister(emailInput, passwordInput, onRegisterLocal)} />
// data={...data} onRegisterLocal={} {() => handleRegister(emailInput, passwordInput, providerType, {onRegisterLocal, onRegisterGoogle})}

LoginForm.propTypes = {
    onRegisterLocal: PropTypes.func,
    onRegisterFacebook: PropTypes.func,
    onRegisterGoogle: PropTypes.func,
    error: PropTypes.string
};

export default LoginForm;
