import React from 'react';
import { Link } from 'react-router';
import CLogoLight from '../../assets/images/logo/CLight.svg';
import styles from '../../assets/css/static/header.scss';
import NotifyModal from '../modals/NotifyModal.js';
import NativeListener from 'react-native-listener';
import classNames from 'classnames';

const headerNavClassnames = classNames(styles.nav);
const navLogoClassnames = classNames('pull-left logo', styles.a);

const headerNavCollapseClassnames = classNames('collapse', 'navbar-collapse', styles['collapse-container']);
const headerButtonCollapseClassnames  = classNames('icon-bar', styles['collapse-button']);


export default class Header extends React.Component {

    handleModalClick(e) {
        e.preventDefault();
    }

    render() {
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
                                <Link to="/" className={navLogoClassnames}>
                                    <img className={styles.logo} src={CLogoLight}/>
                                </Link>
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

                            <ul className="nav navbar-nav navbar-right right">
                                <li>
                                    <NativeListener onClick={this.handleModalClick.bind(this)}>
                                        <Link className={styles.a} data-toggle="modal" data-target="#notify" to="#">Stay in the Loop</Link>
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
