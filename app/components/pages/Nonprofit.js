import React from 'react';
import classNames from 'classnames';
import Divider from '../layout/Divider';
import nonprofit from '../../styles/css/pages/nonprofit.scss';
import common from '../../styles/css/pages/common.scss';
import Subscribe from '../layout/Subscribe';

const Nonprofit = () =>

    <div>
        <div className={classNames('container-fluid', common.hero, nonprofit.hero)}>
            <center>
                <div className={common['hero-text']}>
                    <h1>For Nonprofits</h1>
                    <h3>Connect to talented developers and grow your common.</h3>
                </div>
            </center>
        </div>
        <div className={classNames('container-fluid', common.about2)}>
            <Divider />
            <div className="container">
                <div className="row">
                    <div className={classNames('col-md-12', common.mission)}>
                        <center>
                            <h1>Let's Code Some Good.</h1>
                            <hr />
                            <h3>As developers, we love passion-driven people like you. We’re here to help you find your next big project: build your skills, build your portfolio, and build your community.</h3>
                        </center>
                    </div>
                </div>
            </div>
            <div id={common['more-info-good']} className="row">
                <div className={classNames('col-md-6', common['small-info-container'])}>
                    <center>
                        <div className={common['small-info']}>
                            <h3>What do we do?</h3>
                            <hr />
                            <p>
                                Communicode is a communication platform. When you sign up, you tell us what type nonprofits
                                you are interested in helping. We use these interests and your skills to deliver the best
                                common matches to you. We provide the connection, you just have to do the reaching.
                                Our thinking: the better and more interesting the matches you get, the more you will help.
                                And the more you'll change the world.
                            </p>
                        </div>
                    </center>
                </div>
                <div id={common['info-background-1']} className={classNames('col-md-6')}/>
            </div>
            <div id={common['more-info-good']} className="row">
                <div id={common['info-background-2']} className={classNames('col-md-6')}/>
                <div className={classNames('col-md-6', common['small-info-container'])}>
                    <center>
                        <div className={common['small-info']}>
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
            <Subscribe/>
        </div>
    </div>;

export default Nonprofit;
