import React from 'react';
import classNames from 'classnames';
import Title from 'react-title-component';

import common from '../../../assets/css/pages/common.scss';
import { Divider, SubscribeForm } from 'components';

import dev from './developers.scss';


const Developer = () =>

    <div>
        <Title render={parentTitle => `Developers | ${parentTitle}`}/>
        <div className="container-fluid hero" id={dev.hero}>
            <div className="hero-text">
                <h1>For Volunteers</h1>
                <h3>Develop your portfolio and change the world</h3>
            </div>
        </div>
        <div className="container-fluid">
            <Divider />
            <div className="row" id={dev['code-some-good']}>
                <div className="col-md-12">
                    <h1>Let's Code Some Good.</h1>
                    <hr />
                    <h4>As developers and designers, we love passion-driven people like you. We’re here to help you find your next big project, build your skills, build your portfolio, and build your community.</h4>
                </div>
            </div>
            <div id={common['more-info-good']} className="row">
                <div id={common['info-background-1']} className="col-md-6 col-md-push-6"/>
                <div className={classNames('col-md-6', 'col-md-pull-6', common['small-info-container'])}>
                    <center>
                        <div className={common['small-info']}>
                            <h3>What do we do?</h3>
                            <hr />
                            <p>
                                Communicode is a communication platform. When you sign up, you tell us what type of nonprofits
                                you are interested in helping. We use these interests and your skills to deliver the best
                                nonprofit matches to you. We provide the connection, you just have to do the reaching.
                                Our thinking: the better and more interesting the matches you get, the more you will help.
                                And the more you'll change the world.
                            </p>
                        </div>
                    </center>
                </div>
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
                                experience with it as you guide nonprofits through the maze that is the internet.
                            </p>
                        </div>
                    </center>
                </div>
            </div>
        </div>
        <SubscribeForm/>
    </div>;

export default Developer;
