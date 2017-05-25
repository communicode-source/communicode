import React from 'react';
import { Link } from 'react-router';
import CLogoLight from '../../styles/images/logo/CLight.svg';
import styles from '../../styles/css/static/header.scss';
import LoginModal from '../../containers/RegisterContainer.js';
import NativeListener from 'react-native-listener';

import * as classes from '../../styles/classes/Header';

export default class Header extends React.Component {

    handleModalClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <nav className={classes.HEADER_NAV}>
                    <div className="container">

                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNav">
                            <span className={classes.HEADER_BUTTON_COLLAPSE}></span>
                            <span className={classes.HEADER_BUTTON_COLLAPSE}></span>
                            <span className={classes.HEADER_BUTTON_COLLAPSE}></span>
                        </button>

                        <ul className={styles.left}>
                            <li className="no-hover">
                                <Link to="/" className={classes.NAV_LOGO}>
                                    <img className={styles.logo} src={CLogoLight}/>
                                </Link>
                            </li>
                        </ul>
                        <div className={classes.HEADER_NAV_COLLAPSE} id="mainNav">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="no-hover">
                                    <Link className={styles.a} to="/about">About Us</Link>
                                </li>
                                <li className="no-hover">
                                    <Link className={styles.a} to="/developers">For Developers</Link>
                                </li>
                                <li className="no-hover">
                                    <Link className={styles.a} to="/nonprofits">For Nonprofits</Link>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right right">
                                <li>
                                    <NativeListener onClick={this.handleModalClick.bind(this)}>
                                        <Link className={styles.a} data-toggle="modal" data-target="#login" to="#">Register</Link>
                                    </NativeListener>
                                </li>
                                <li>
                                    <NativeListener onClick={this.handleModalClick.bind(this)}>
                                        <Link className={styles.a} data-toggle="modal" data-target="#login" to="#">Login</Link>
                                    </NativeListener>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <LoginModal />
            </div>
        );
    }
};

/*
 I am writing this so that future Trevor knows what
 attributes he needs to create a model:

 data-toggle="modal" href="javascript:void(0)"

 You're welcome future trevor.
 */
