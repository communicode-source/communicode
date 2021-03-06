import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CLogoLight from '../../assets/images/logo/CLight.svg';
import styles from '../../assets/css/static/header.scss';
import RegisterModal from '../../containers/RegisterContainer.js';
import LoginModal from '../../containers/LoginContainer.js';
import Logout from '../../containers/LogoutContainer.js';
import NavbarGreeting from '../layout/dynamic/NavbarGreeting.js';
import NativeListener from 'react-native-listener';
import classNames from 'classnames';

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

    handleRModalClick(e) {
        e.preventDefault();
    }

    render() {
        let url;
        let mainNavContent;
        const { isAuthenticated, user, shouldShowLoginModal, showLoginModal, shouldShowRegisterModal, toggleRegisterModal } = this.props;
        if(isAuthenticated) { url = '/' + this.props.user.profile.url; }

        if(isAuthenticated && this.props.user.profile.accountType) {
            mainNavContent = (
                <li className="dropdown">
                    <Link className={styles.a} to="/project/step/1">Start a Project</Link>
                </li>
            );
        }

        if(isAuthenticated && !this.props.user.profile.accountType) {
            mainNavContent = (
                <li className="dropdown">
                    <Link className={styles.a} to="/me/feed">My Project Feed</Link>
                </li>
            );
        }

        return (
            <div>
                <nav className={headerNavClassnames}>
                    <div className="container">

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNav">
                            <span className={headerButtonCollapseClassnames}/>
                            <span className={headerButtonCollapseClassnames}/>
                            <span className={headerButtonCollapseClassnames}/>
                        </button>

                        <ul className={styles.left}>
                            <li className="no-hover">
                                <i className={navLogoClassnames}>
                                    <Link className={styles.logoLink} to="/"><img className={styles.logo} src={CLogoLight}/></Link>
                                </i>
                            </li>
                        </ul>
                        <div className={headerNavCollapseClassnames} id="mainNav">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="no-hover">
                                    <Link className={styles.a} to="/about">About Us</Link>
                                </li>
                                <li className="no-hover">
                                    <Link className={styles.a} to="/developers">For Volunteers</Link>
                                </li>
                                <li className="no-hover">
                                    <Link className={styles.a} to="/nonprofits">For Nonprofits</Link>
                                </li>
                            </ul>

                            {!isAuthenticated &&
                                <ul className="nav navbar-nav navbar-right right">
                                    <li>
                                        <NativeListener onClick={this.handleRModalClick.bind(this)}>
                                            <Link className={styles.a} onClick={() => toggleRegisterModal()} data-toggle="modal" data-target="#register" to="#">Register</Link>
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
                                    {mainNavContent}
                                    <li className="dropdown">
                                        <Link className={styles.a} to="/me/projects">My Projects</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link className={dropdownClassnames} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <NavbarGreeting isAuthenticated={isAuthenticated} profile={user.profile} />
                                        </Link>
                                        <ul className={classNames('dropdown-menu', styles.dropdown)}>
                                            <li><Link to={url}>My Profile</Link></li>
                                            <li><Link to="/me/settings">Profile Settings</Link></li>
                                            <li><Logout /></li>
                                        </ul>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>
                </nav>

                {isAuthenticated === false &&
                    <div>
                        <RegisterModal show={shouldShowRegisterModal} toggleRegisterModal={toggleRegisterModal}/>
                        <LoginModal shouldShowModal={shouldShowLoginModal} />
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
    shouldShowRegisterModal: PropTypes.bool,
    toggleRegisterModal: PropTypes.func,
    user: PropTypes.object
};

/*
 I am writing this so that future Trevor knows what
 attributes he needs to create a model:

 data-toggle="modal" href="javascript:void(0)"

 You're welcome future trevor.
 */

export default Header;
