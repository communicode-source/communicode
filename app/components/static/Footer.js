import React from 'react';
import main from '../../styles/css/main.scss';
import footer from '../../styles/css/static/footer.scss';
import classNames from 'classnames';

const Footer = () =>
    <footer className={main.footer}>
        <div className={classNames('container', footer.wrap)}><div className="row">

            <div className="col-xs-4 col-sm-2">
                <img id="icon" src={require('../../styles/images/logo/CLight.svg')} />
            </div>

            <div className="col-xs-12 col-sm-6 hidden-xs">
                <h6 className="copyright">©2015 Communicode</h6>
            </div>

            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}><h6><a className="btn btn-social-icon btn-facebook" href="#"><span className="fa fa-facebook"></span></a></h6></li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}>
                        <h6>
                            <a className="btn btn-social-icon btn-instagram" href="#">
                                <span className="fa fa-instagram"></span>
                            </a>
                        </h6>
                    </li>
                </ul>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-1">
                <ul>
                    <li className={footer.socialLink}>
                        <h6>
                            <a className="btn btn-social-icon btn-twitter" href="#">
                                <span className="fa fa-twitter"></span>
                            </a>
                        </h6>
                    </li>
                </ul>
            </div>

        </div></div>
    </footer>;

/*

 /*
 <div className="col-xs-4 col-sm-2">
 <ul>
 <li><h6><a href="#">Log In</a></h6></li>
 <li><h6><a href="#">Register</a></h6></li>
 <li><h6><a href="#">About Us</a></h6></li>
 <li><h6><a href="#">FAQs</a></h6></li>
 </ul>
 </div>
 <div className="col-xs-4 col-sm-2">
 <ul>
 <li><h6><a href="#">Contact</a></h6></li>
 <li><h6><a href="#">Sitemap</a></h6></li>
 <li><h6><a href="#">Terms of Use</a></h6></li>
 <li><h6><a href="#">Privacy Policy</a></h6></li>
 </ul>
 </div>
 <div className="col-xs-12 col-sm-6 hidden-xs">
 <h6 className="copyright">©2017 Communicode</h6>
 </div>
 */

export default Footer;
