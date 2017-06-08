import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
import * as classes from '../../../assets/classes/LoginModal';

const handleRegister = (user, methods) => {
    if(user.provider === 'local') {
        const email = user.email;
        const password = user.password;
        const provider = user.provider;

        if(!email || !password) return;

        methods.onRegisterLocal({ email, password, provider });
    }
    else if(user.provider === 'google') {
        const accessToken = user.accessToken;
        const tokenId = user.tokenId;
        const provider = user.provider;
        methods.onRegisterGoogle({access_token: accessToken, token_id: tokenId, provider: provider, accountType: 0});
    }
     else if(user.provider === 'facebook') {
         const accessToken = user.accessToken;
         const provider = user.provider;
         const name = user.name;
         const email = user.email;
         const userid = user.userid;
         methods.onRegisterFacebook({token_id: accessToken, name, email, userid, provider, accountType: 0});
     }
};

const RegisterSlider = ({ user, methods }) => {
    return (
        <div id={classes.HANDLE} onClick={() => handleRegister({...user}, {...methods})}>
            <i className={classes.HANDLE_ARROWS} aria-hidden="true"></i>
        </div>
    );
};

RegisterSlider.propTypes = {
    user: PropTypes.object,
    methods: PropTypes.object
};

// <button onClick={() => handleRegister({...registerData}, {...methods})}>Register</button>
/*  <div id={classes.HANDLE}>
      <i className={classes.HANDLE_ARROWS} aria-hidden="true"></i>
  </div>
*/

export default RegisterSlider;
