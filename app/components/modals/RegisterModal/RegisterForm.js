import React, { PropTypes } from 'react';
import * as rules from 'rules';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import styles from './registerForm.scss';
import RegisterSlider from './RegisterSlider';

const handleUpdateProvider = (provider, response, onUpdateProvider) => {
    onUpdateProvider(provider, response);
};

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const {
            onValidateEmail,
            onValidatePassword,
            onRegisterLocal,
            onRegisterFacebook,
            onRegisterGoogle,
            onUpdateProvider,
            user,
            // error
        } = this.props;
        let email;
        let password;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-md-push-2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <GoogleLogin
                                        clientId="42299952850-v2ofgh81ngrahtp8djhh1rf6j65cqgj3.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={response => { handleUpdateProvider('google', response, onUpdateProvider); }}
                                        onFailure={response => { return response; }}
                                        className="btn btn-block btn-social btn-google"
                                    >
                                        <span className="fa fa-google"/>&nbsp;&nbsp;Register with Google
                                    </GoogleLogin>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <FacebookLogin
                                        appId="164246817399322"
                                        fields="name,email,picture"
                                        callback={response => { handleUpdateProvider('facebook', response, onUpdateProvider);  }}
                                        cssClass="btn btn-block btn-social btn-facebook"
                                        icon="fa fa-facebook"
                                        textButton="&nbsp;&nbsp;Register with Facebook"
                                    />
                                </div>
                            </div>
                            {user.provider === 'local' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                            <legend>Or sign up via Email</legend>
                                            <div className="form-group">
                                                <label htmlFor="registerInputEmail">Email</label>
                                                <input type="email" className="form-control" id="registerInputEmail" placeholder="Email"
                                                       value={user.email || ''} ref={node => {email = node;}}
                                                       onChange={() => onValidateEmail(email.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="registerInputPassword">Password</label>
                                                <input type="password" className="form-control" id="registerInputPassword"
                                                       placeholder="Password"
                                                       value={user.password || ''} ref={node => {password = node;}}
                                                       onChange={() => onValidatePassword(password.value)}
                                                       maxLength={`${rules.MAX_PASSWORD_LENGTH}`}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                            {user.provider !== 'local' &&
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Hello, {user.name}</h3>
                                        <img src={user.imageUrl} />
                                    </div>
                                </div>
                            }
                            <div className="row">
                                <div className="col-xs-4">
                                    <h6><i className="fa fa-arrow-left"/>&nbsp;Developer</h6>
                                </div>
                                <div className="col-xs-4 pull-right">
                                    <h6>Nonprofit&nbsp;<i className="fa fa-arrow-right"/></h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" id={styles['register-slider']}>
                                    <RegisterSlider user={user} methods={{onRegisterLocal, onRegisterFacebook, onRegisterGoogle}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*
<div id={classes.HANDLER}>
    <RegisterSlider user={user} methods={{onRegisterLocal, onRegisterFacebook, onRegisterGoogle}} />
    <div id={classes.LEFT_SIDE}></div>
</div>
*/
// data.accessToken = response.accessToken; data.user = {name: response.name, email: response.email, userid: response.userID}; data.provider = 'facebook';
// <h6 className={classes.INPUT_LABEL_ERROR}>{error.message}</h6>

RegisterForm.propTypes = {
    onValidateEmail: PropTypes.func,
    onValidatePassword: PropTypes.func,
    onRegisterLocal: PropTypes.func,
    onRegisterFacebook: PropTypes.func,
    onRegisterGoogle: PropTypes.func,
    onUpdateProvider: PropTypes.func,
    user: PropTypes.object,
    error: PropTypes.string
};
