import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

const handleLogout = (logout) => {
    localStorage.removeItem('id_token');
    browserHistory.replace('/');
    logout();
};

const Logout = ( props ) => {
    const {
        onLogoutClick
    } = props;

    return (
        <li onClick={() => { handleLogout(onLogoutClick); }}>
            <Link to="#">Logout</Link>
        </li>
    );
};

Logout.propTypes = {
    onLogoutClick: PropTypes.func
};

export default Logout;
