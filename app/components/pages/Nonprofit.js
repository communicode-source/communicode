import React from 'react';
import classNames from 'classnames';
import Divider from '../layout/Divider';
import nonprofit from '../../styles/css/pages/nonprofit.scss';
import home from '../../styles/css/pages/home.scss';
import main from '../../styles/css/main.scss';

const Nonprofit = () =>

    <div>
        <div className={classNames('container-fluid', nonprofit.hero)}>
            <center>
                <div className={nonprofit['hero-text']}>
                    <h1>For Nonprofits</h1>
                    <h3>Connect to talented developers and grow your Nonprofit.</h3>
                </div>
            </center>
        </div>
        <div className={classNames('container-fluid', nonprofit.nonprofit2, nonprofit.nonprofit)}>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className={classNames('col-md-12', nonprofit.mission)}>
                        <center>
                            <h1>Let's Change the World.</h1>
                            <hr />
                            <h3>As developers, we love passion-driven people like you. We’re here to help you find your next big project: build your skills, build your portfolio, and build your community.</h3>
                        </center>
                    </div>
                </div>
            </div>
            <div id={nonprofit['more-info-good']} className="row">
                <div className={classNames('col-md-6', nonprofit['small-info-container'])}>
                    <center>
                        <div className={nonprofit['small-info']}>
                            <h3>What do we do?</h3>
                            <hr />
                            <p>
                              Communicode is a communication platform. When you sign up, you tell us what type nonprofits
                              you are interested in helping. We use these interests and your skills to deliver the best
                              nonprofit matches to you. We provide the connection, you just have to do the reaching.
                              Our thinking: the better and more interesting the matches you get, the more you will help.
                              And the more you'll change the world.
                            </p>
                        </div>
                    </center>
                </div>
                <div id={nonprofit['info-background-1']} className={classNames('col-md-6')}/>
            </div>
            <div id={nonprofit['more-info-good']} className="row">
                <div id={nonprofit['info-background-2']} className={classNames('col-md-6')}/>
                <div className={classNames('col-md-6', nonprofit['small-info-container'])}>
                    <center>
                        <div className={nonprofit['small-info']}>
                            <h3>Why should I volunteer?</h3>
                            <hr />
                            <p>
                                In today's world, it's almost impossible to get a job without doing projects. Communicode gives
                                you the opportunity to build a portfolio or work with new technology while simultaneously helping
                                to modernize nonprofits. Need to show expertise in a new skill for a job? Get immediate hands on
                                experience with it as you guide nonprofits into the 21<sup>st</sup> century.
                            </p>
                        </div>
                    </center>
                </div>
            </div>
            <div className="row">
                <div className={classNames('col-md-12', home['create-account'])}>
                    <center>
                        <div className={main.text}>
                            <h2>Convinced?</h2>
                            <h4>Don't worry, we'll be here soon. And we can't do it without you.</h4>
                            <div className={classNames('input-group', home['input-container'])}>
                                <span className={classNames('input-group-addon', home['email-addon'])} id="basic-addon1"><i className="fa fa-envelope-o"
                                                                                                                            aria-hidden="true"/></span>
                                <input type="text" className={classNames('form-control', home.input)} placeholder="boring@probablygmail.com"
                                       aria-describedby="basic-addon1"/>
                                <span className={classNames('input-group-btn', home['mail-submit'])}>
                                    <button className={classNames('btn', main['primary-btn'], home[''])} type="button">
                                        Help Us Change the World <i className="fa fa-arrow-right" aria-hidden="true"/>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    </div>;

export default Nonprofit;
