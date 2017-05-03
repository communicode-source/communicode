import React from 'react';
import { Link } from 'react-router';
import CLogoLight from '../../styles/images/logo/CLight.svg';
import styles from '../../styles/css/static/header.scss';
import NotifyModal from '../modals/NotifyModal.js';
import NativeListener from 'react-native-listener';
import classNames from 'classnames';

export default class Header extends React.Component {

    handleModalClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <nav className={styles.nav}>
                    <div className="container">

                        <ul className={styles.left}>
                            <li className="no-hover">
                                <Link to="/" className={classNames('pull-left logo', styles.a)}>
                                    <img className={styles.logo} src={CLogoLight}/>
                                </Link>
                            </li>
                        </ul>
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

                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right right">
                                <li>
                                    <NativeListener onClick={this.handleModalClick.bind(this)}>
                                        <Link className={styles.a} data-toggle="modal" data-target="#notify" to="#">Notify Me</Link>
                                    </NativeListener>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <NotifyModal />
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
