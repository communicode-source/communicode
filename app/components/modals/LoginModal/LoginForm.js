import React, { PropTypes } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

// import * as classes from './classes';
import * as rules from 'rules';

const handleLogin = (data, methods) => {
    if(data.provider === 'local') {
        const email = data.email.value;
        const password = data.password.value;
        const provider = data.provider;

        if(!email || !password) return;

        methods.onLoginLocal({ email, password, provider });
    }
    else if(data.provider === 'google') {
        const accessToken = data.accessToken;
        const tokenId = data.tokenId;
        const provider = data.provider;
        methods.onLoginGoogle({access_token: accessToken, token_id: tokenId, provider: provider, accountType: 0});
    }
     else if(data.provider === 'facebook') {
         const accessToken = data.accessToken;
         const provider = data.provider;
         const name = data.user.name;
         const email = data.user.email;
         const userid = data.user.userid;
         methods.onLoginFacebook({token_id: accessToken, name, email, userid, provider, accountType: 0});
     }
};

const LoginForm = ( props ) => {
    const data = {
        email: '',
        password: '',
        provider: 'local'
    };

    const {
      methods,
      error
    } = props;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 col-md-push-2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                { error &&
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="alert alert-danger" role="alert">{error}</div>
                                        </div>
                                    </div>
                                }
                                <GoogleLogin
                                    clientId="42299952850-v2ofgh81ngrahtp8djhh1rf6j65cqgj3.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={response => { data.accessToken = response.accessToken; data.provider = 'google'; data.tokenId = response.tokenId; }}
                                    onFailure={response => { return response; }}
                                    className="btn btn-block btn-social btn-google"
                                >
                                    <span className="fa fa-google"/>&nbsp;&nbsp;Login with Google
                                </GoogleLogin>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <FacebookLogin
                                    appId="164246817399322"
                                    fields="name,email,picture"
                                    callback={response => { data.accessToken = response.accessToken; data.user = {name: response.name, email: response.email, userid: response.userID}; data.provider = 'facebook'; }}
                                    cssClass="btn btn-block btn-social btn-facebook"
                                    icon="fa fa-facebook"
                                    textButton="&nbsp;&nbsp;Login with Facebook"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <legend>Or use your Email</legend>
                                    <div className="form-group">
                                        <label htmlFor="loginInputEmail">Email</label>
                                        <input type="email" placeholder="Email" required className="form-control"
                                               ref={ node => {data.email = node;}}
                                               maxLength={`${rules.MAX_EMAIL_LENGTH}`}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="loginInputPassword">Password</label>
                                        <input type="password" placeholder="Password" required className="form-control"
                                               ref={ node => {data.password = node;}}
                                               maxLength={`${rules.MAX_PASSWORD_LENGTH}`} />
                                    </div>
                                    <button type="submit" onClick={() => handleLogin(data, methods)} className="btn btn-primary">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    methods: PropTypes.object,
    error: PropTypes.string
};

export default LoginForm;
