import React, { PropTypes } from 'react';

const NavbarGreeting = ({ isAuthenticated, profile }) => {
    let greeting = profile.email;
    if(isAuthenticated === true) {
        if((profile.fname !== '' && profile.fname !== null && profile.fname !== undefined) && (profile.lname !== '' && profile.lname !== null && profile.lname !== undefined)) {
            greeting = profile.fname + ' ' + profile.lname;
        }
        else if(profile.organizationname !== null && profile.organizationname !== '' && profile.organizationname !== undefined) {
            greeting = profile.organizationname;
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
