import React, { PropTypes } from 'react';

const NavbarGreeting = ({ isAuthenticated, profile }) => {
    let greeting = profile.email;

    if(isAuthenticated) {
        if('fname' in profile && 'lname' in profile) {
            greeting = profile.fname + ' ' + profile.lname;
        }
    }

    return (
        <div>
            {greeting} <i className="fa fa-caret-down"></i>
        </div>
    );
};

NavbarGreeting.propTypes = {
    isAuthenticated: PropTypes.bool,
    profile: PropTypes.object,
};

export default NavbarGreeting;
