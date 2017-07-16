import React from 'react';
import { Link } from 'react-router';
import Title from 'react-title-component';

import { Divider, SubscribeForm, SocialButton } from 'components';

import home from './home.scss';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Title render={parentTitle => `${parentTitle}`}/>
                <div className="container-fluid hero" id={home.hero}>
                    <div className="row">
                        <div className="hero-text">
                            <h1>Let's Create Together.</h1>
                            <h3>Help change the world through the power of technology</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="hero-links">
                            <Link to="/developers" className="btn btn-primary">Volunteers</Link>
                            <Link to="/nonprofits" className="btn btn-dark">Nonprofits</Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Divider />
                    <div className="row">
                        <div className="col-md-6" id={home['info-developers']}>
                            <div>
                                <h2>Volunteers</h2>
                                <hr />
                                <div>
                                    Communicode matches designers and programmers to causes they care about to help usher nonprofits into the 21<sup>st</sup>
                                    &nbsp; century
                                </div>
                                <Link to="/developers" className="btn btn-primary btn-sm">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-md-6" id={home['info-nonprofits']}>
                            <div>
                                <h2>Nonprofits</h2>
                                <hr />
                                <div>Communicode helps propel your nonprofit into the digital age by matching you with volunteers who share your same passion</div>
                                <Link to="/nonprofits" className="btn btn-primary btn-sm">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" id={home.revolution}>
                        <div className="col-md-12 col-lg-6 hidden-sm hidden-xs">
                            <img width="100%" src={require('./TripleBrowsersLogo.png')}/>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <h2>We're Creating a Revolution</h2>
                            <div>
                                Let's make an impact together. Communicode matches developers and designers with nonprofits to help carry out any design, branding, or technology needs.
                                Follow us for more information and updates.
                            </div>
                            <div className="row hidden-sm hidden-xs">
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="facebook" link icon/>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="instagram" link icon/>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="twitter" link icon/>
                                </div>
                            </div>
                            <div className="row hidden-xl hidden-lg hidden-md">
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="facebook" link block>Follow us on Facebook</SocialButton>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="instagram" link block>Follow us on Instagram</SocialButton>
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    <SocialButton platform="twitter" link block>Follow us on Twittwr</SocialButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4" id={home['portfolio-panel']}>
                            <h3>Expand Your Portfolio</h3>
                            <hr />
                            <div>
                                Need a few more projects to create a portfolio? Communicode
                                gives you the opportunity to expand your portfolio, entirely free.
                            </div>
                        </div>
                        <div className="col-md-4" id={home['work-panel']}>
                            <h3>Work on What You Love</h3>
                            <hr />
                            <div>
                                Communicode allows you to work on causes you are interested in.
                                You give us your interests, we give you matches. Its that simple.
                            </div>
                        </div>
                        <div className="col-md-4" id={home['help-panel']}>
                            <h3>Get the Help You Deserve</h3>
                            <hr />
                            <div>
                                Nonprofits need to be up to date with technology.
                                Communicode matches you with people who care about
                                what you have to offer.
                            </div>
                        </div>
                    </div>
                </div>
                <SubscribeForm/>
            </div>
        );
    }
}
