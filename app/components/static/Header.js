import React from 'react';
import { Link } from 'react-router';
import CLogoLight from '../../styles/Images/Logo/CLight.svg';
import styles from '../../styles/css/static/header.scss';
import NotifyModal from '../modals/NotifyModal.js';

const Header = () =>
  <div>
    <nav className={styles.nav}>
        <div className="container">

            <ul className={styles.left}>
              <li className="no-hover">
                <Link to="/" className="pull-left logo" className={styles.a}>
                  <img className={styles.logo} src={CLogoLight} />
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-left">
              <li className="no-hover">
                <Link className={styles.a} to="/why">Why Communicode?</Link>
              </li>
              <li className="no-hover">
                <Link className={styles.a} to="/about">About Us</Link>
              </li>
            </ul>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right right">
                    <li>
                        <Link className={styles.a} data-toggle="modal" data-target="#notify" to="#">Notify Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <NotifyModal />
  </div>;

/*
  I am writing this so that future Trevor knows what
  attributes he needs to create a model:

  data-toggle="modal" href="javascript:void(0)"

  You're welcome future trevor.
*/

export default Header;
