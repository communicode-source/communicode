import React from 'react';
import { Link } from 'react-router';

const FacebookSocialButton = () =>
    <Link className="btn btn-social-icon btn-instagram" to="https://instagram.com/communicode.co" target="_blank">
        <span className="fa fa-instagram"/>
    </Link>;

export default FacebookSocialButton;
