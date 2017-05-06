import React from 'react';
import main from '../../styles/css/main.scss';
import footer from '../../styles/css/static/footer.scss';

const Footer = () =>
    <footer className={main.footer}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-6 col-xs-offset-3 col-sm-offset-0 col-sm-4">
                    <center><img id="icon" src={require('../../styles/images/logo/CLight.svg')}/></center>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-3 pull-right">
                    <div className="container-fluid" id="footer-nav">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Log In</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Register</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">About Us</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">FAQs</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Contact</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Sitemap</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Terms of Use</a></h6></center>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <center><h6><a href="#">Privacy Policy</a></h6></center>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h6 className={footer.copyright}>&copy;2017 Communicode, LLC</h6>
                </div>
            </div>
        </div>
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
