import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NativeListener from 'react-native-listener';

import { LogoLight } from 'assets';
import { LoginModalContainer, RegisterModalContainer, LogoutContainer } from 'containers';

import NavbarGreeting from './NavbarGreeting.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    handleModalClick(e) {
        e.preventDefault();
    }

    render() {
        const { isAuthenticated, user, shouldShowLoginModal, showLoginModal } = this.props;

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNav">
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand"><img alt="Communicode" src={LogoLight}/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="mainNav">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="no-hover">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="no-hover">
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li className="no-hover">
                                    <Link to="/developers">For Volunteers</Link>
                                </li>
                                <li className="no-hover">
                                    <Link to="/nonprofits">For Nonprofits</Link>
                                </li>
                            </ul>

                            {!isAuthenticated &&
                                <ul className="nav navbar-nav navbar-right right">
                                    <li>
                                        <NativeListener onClick={this.handleModalClick.bind(this)}>
                                            <Link data-toggle="modal" data-target="#register" to="#">Register</Link>
                                        </NativeListener>
                                    </li>
                                    <li>
                                        <NativeListener onClick={this.handleModalClick.bind(this)}>
                                            <Link onClick={ () => { showLoginModal(true); } } to="#">Login</Link>
                                        </NativeListener>
                                    </li>
                                </ul>
                            }

                            {isAuthenticated &&
                                <ul className="nav navbar-nav navbar-right right">
                                    <li className="dropdown">
                                        <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <NavbarGreeting isAuthenticated={isAuthenticated} user={user} />
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <LogoutContainer />
                                        </ul>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>

                {!isAuthenticated &&
                    <div>
                        <RegisterModalContainer />
                        <LoginModalContainer shouldShowModal={shouldShowLoginModal} />
                    </div>
                }
            </div>
        );
    }
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    shouldShowLoginModal: PropTypes.bool,
    showLoginModal: PropTypes.func,
    user: PropTypes.object
};

/*
 I am writing this so that future Trevor knows what
 attributes he needs to create a model:

 data-toggle="modal" href="javascript:void(0)"

 You're welcome future trevor.
 */

export default Header;
