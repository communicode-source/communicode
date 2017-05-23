import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import * as classes from '../../../styles/classes/LoginModal';

const handleRegister = (data, methods) => {
    if(data.provider === 'local') {
        const email = data.email.value;
        const password = data.password.value;
        const provider = data.provider;

        if(!email || !password) return;

        methods.onRegisterLocal({ email, password, provider });

        data.emailInput.value = '';
        data.passwordInput.value = '';
    }
    else if(data.provider === 'google') {
        const accessToken = data.accessToken;
        const tokenId = data.tokenId;
        const provider = data.provider;

        methods.onRegisterGoogle({access_token: accessToken, token_id: tokenId, provider: provider, accountType: 0});
    }
};


const LoginSlider = ({ registerData, methods }) => {
    return (
        <button onClick={() => handleRegister({...registerData}, {...methods})}>Register</button>
    );
};

LoginSlider.propTypes = {
    registerData: PropTypes.object,
    methods: PropTypes.object,
};

/*  <div id={classes.HANDLE}>
      <i className={classes.HANDLE_ARROWS} aria-hidden="true"></i>
  </div>
*/

export default LoginSlider;
