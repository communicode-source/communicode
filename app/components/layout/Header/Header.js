import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import NativeListener from 'react-native-listener';

import { LogoLight } from 'assets';
import { LoginModalContainer, RegisterModalContainer, LogoutContainer } from 'containers';

import styles from './header.scss';
import NavbarGreeting from './NavbarGreeting.js';

const headerNavClassnames = classNames(styles.nav);
const navLogoClassnames = classNames('pull-left logo', styles.a);

const headerNavCollapseClassnames = classNames('collapse', 'navbar-collapse', styles['collapse-container']);
const headerButtonCollapseClassnames  = classNames('icon-bar', styles['collapse-button']);
const dropdownClassnames = classNames(styles.a, 'dropdown-toggle');

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
                                <span className={headerButtonCollapseClassnames}/>
                                <span className={headerButtonCollapseClassnames}/>
                                <span className={headerButtonCollapseClassnames}/>
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
                                            <Link className={styles.a} data-toggle="modal" data-target="#register" to="#">Register</Link>
                                        </NativeListener>
                                    </li>
                                    <li>
                                        <NativeListener onClick={this.handleModalClick.bind(this)}>
                                            <Link className={styles.a} onClick={ () => { showLoginModal(true); } } to="#">Login</Link>
                                        </NativeListener>
                                    </li>
                                </ul>
                            }

                            {isAuthenticated &&
                                <ul className="nav navbar-nav navbar-right right">
                                    <li className={classNames('dropdown', styles.dropdown)}>
                                        <Link className={dropdownClassnames} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <NavbarGreeting isAuthenticated={isAuthenticated} user={user} />
                                        </Link>
                                        <ul className={classNames('dropdown-menu', styles['dropdown-menu'])}>
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
