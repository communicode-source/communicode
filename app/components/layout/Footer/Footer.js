import React from 'react';
import classNames from 'classnames';

import { FacebookSocialButton, TwitterSocialButton, InstagramSocialButton } from 'components';
import { LogoLight } from 'assets';

import styles from './footer.scss';

const Footer = () =>
    <footer className={styles.footer}>
        <div className={classNames('container', styles.wrap)}><div className="row">

            <div className="col-xs-4 col-sm-2">
                <img id="icon" src={LogoLight} />
            </div>

            <div className="col-xs-12 col-sm-4 col-md-6 hidden-xs">
                <h6 className="copyright">©2017 Communicode LLC</h6>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li>
                        <h6>
                            <FacebookSocialButton/>
                        </h6>
                    </li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li>
                        <h6>
                            <InstagramSocialButton/>
                        </h6>
                    </li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li>
                        <h6>
                            <TwitterSocialButton/>
                        </h6>
                    </li>
                </ul>
            </div>

        </div></div>
    </footer>;


export default Footer;
