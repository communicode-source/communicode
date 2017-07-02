import React from 'react';
import { Link } from 'react-router';

const FacebookSocialButton = () =>
    <Link className="btn btn-social-icon btn-facebook" to="https://facebook.com/communicode.co" target="_blank">
        <span className="fa fa-facebook"/>
    </Link>;

export default FacebookSocialButton;
