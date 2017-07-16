import React from 'react';
import { Link } from 'react-router';

import { SocialButton, Divider } from 'components';
import { LogoLight } from 'assets';

const Footer = () =>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-2">
                    <img src={LogoLight} className="footer-brand" />
                </div>
                <div className="col-xs-12 col-sm-9 col-md-8 col-md-push-2">
                    <div className="hidden-xs col-sm-4 col-md-4">
                        {/* Placeholder to get the correct spacing */}
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="nav nav-pills nav-stacked">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link href="https://blog.communicode.co" target="_blank">Our Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                        <ul className="nav nav-pills nav-stacked">
                            <li><Link to="/developers">For Volunteers</Link></li>
                            <li><Link to="/nonprofits">For Nonprofits</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-sm-push-6">
                    <div className="col-xs-4">
                        <SocialButton platform="facebook" icon link/>
                    </div>
                    <div className="col-xs-4">
                        <SocialButton platform="instagram" icon link/>
                    </div>
                    <div className="col-xs-4">
                        <SocialButton platform="twitter" icon link/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-sm-pull-6">
                    &copy;{new Date().getFullYear()} Communicode LLC
                </div>
            </div>
        </div>
    </footer>;


export default Footer;
