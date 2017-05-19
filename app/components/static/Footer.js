import React from 'react';
import main from '../../assets/css/main.scss';
import footer from '../../assets/css/static/footer.scss';
import classNames from 'classnames';

const Footer = () =>
    <footer className={main.footer}>
        <div className={classNames('container', footer.wrap)}><div className="row">

            <div className="col-xs-4 col-sm-2">
                <img id="icon" src={require('../../assets/images/logo/CLight.svg')} />
            </div>

            <div className="col-xs-12 col-sm-6 hidden-xs">
                <h6 className="copyright">©2017 Communicode LLC</h6>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}><h6><a className="btn btn-social-icon btn-facebook" href="https://facebook.com/communicode.co"><span className="fa fa-facebook"></span></a></h6></li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}>
                        <h6>
                            <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/communicode.co">
                                <span className="fa fa-instagram"/>
                            </a>
                        </h6>
                    </li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}>
                        <h6>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/communicodeLLC">
                                <span className="fa fa-facebook"/>
                            </a>
                        </h6>
                    </li>
                </ul>
            </div>

        </div></div>
    </footer>;


export default Footer;
