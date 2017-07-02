import React from 'react';
import { Link } from 'react-router';

const TwitterSocialButton = () =>
    <Link className="btn btn-social-icon btn-twitter" to="https://twitter.com/CommunicodeLLC" target="_blank">
        <span className="fa fa-twitter"/>
    </Link>;

export default TwitterSocialButton;
