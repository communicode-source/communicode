import React from 'react';
import classNames from 'classnames';
import Divider from '../layout/Divider';
import dev from '../../styles/css/pages/developer.scss';
import home from '../../styles/css/pages/home.scss';
import main from '../../styles/css/main.scss';

const Developer = () =>

    <div>
        <div className={classNames('container-fluid', dev.hero)}>
            <center>
                <div className={dev['hero-text']}>
                    <h1>For Developers</h1>
                    <h3>Develop your portfolio and change the world.</h3>
                </div>
            </center>
        </div>
        <div className={classNames('container-fluid', dev.dev2, dev.dev)}>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className={classNames('col-md-12', dev.mission)}>
                        <center>
                            <h1>Let's Code Some Good.</h1>
                            <hr />
                            <h3>As developers, we love passion-driven people like you. We’re here to help you find your next big project: build your skills, build your portfolio, and build your community.</h3>
                        </center>
                    </div>
                </div>
            </div>
            <div id={dev['more-info-good']} className="row">
                <div className={classNames('col-md-6', dev['small-info-container'])}>
                    <center>
                        <div className={dev['small-info']}>
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
                <div id={dev['info-background-1']} className={classNames('col-md-6')}/>
            </div>
            <div id={dev['more-info-good']} className="row">
                <div id={dev['info-background-2']} className={classNames('col-md-6')}/>
                <div className={classNames('col-md-6', dev['small-info-container'])}>
                    <center>
                        <div className={dev['small-info']}>
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

export default Developer;
