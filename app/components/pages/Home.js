import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import home from '../../styles/css/pages/home.scss';
import main from '../../styles/css/main.scss';

const primaryBtnClassnames         = classNames(main['primary-btn'], main.btn, home.a);
const darkBtnClassnames            = classNames(main['dark-btn'], main['no-transition'], main.btn, home.a);
const devInfoPanelClassnames       = classNames('col-md-6', home.developers, home['info-panel']);
const nonprofitInfoPanelClassnames = classNames('col-md-6', home.nonprofits, home['info-panel']);
const infoTextButtonClassnames     = classNames(main['primary-btn'], main['btn-small'], main.dark, main['no-transition']);

const Home = () =>

    <div>
        <div className={classNames(home['container-fluid'], home.hero)}>
          <center>
            <div className={home['hero-text']}>
                <h1>Let's Create Together.</h1>
                <h3>Help change the world through the power of technology</h3>
                <Link href="#" className={primaryBtnClassnames}>Developers</Link>
                <Link href="#" className={darkBtnClassnames}>Nonprofits</Link>
              </div>
            </center>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" className={home.divider}>

            </div>
          </div>
          <div className="row">
            <div className={devInfoPanelClassnames}>
              <div className={home['info-text']}>
                <h2>Volunteers</h2>
                <hr />
                <p>Communicode matches designers and developers to causes they care about to help propel nonprofit technology into the 21<sup>st</sup> Century</p>
                <center>
                  <a href="#" className={infoTextButtonClassnames}>Learn More</a>
                </center>
              </div>
            </div>
            <div className={nonprofitInfoPanelClassnames}>
              <div className={home['info-text']}>
                <h2>Nonprofits</h2>
                <hr />
                <p>Communicode helps usher your nonprofit into the digital age with updated technology services from volunteers who care</p>
                <center>
                  <a href="#" className={infoTextButtonClassnames}>Learn More</a>
                </center>
              </div>
            </div>
          </div>
          <div className={classNames('row', home['unified-section'])}>
            <div className="col-md-6">
              <img width="100%" src={require('../../styles/Images/Homepage/TripleBrowsers.png')} />
            </div>
            <div className={classNames('col-md-6', home['unified-section'])}>
              <h2>We're Creating a Revolution</h2>
              <p>Help do something that makes a real-world difference. Communicode will match you with causes you care about. Save job requests you are interested in and make a difference with the skills you have.</p>
              <Link href="#" className={darkBtnClassnames}>Join the Revolution</Link>
            </div>
          </div>
          <div className={classNames('row', home.features)} >
            <div id={home['portfolio-panel']} className={classNames('col-md-4', home['info-panel'])}>
              <h3>Expand Your Portfolio</h3>
              <hr />
              <p>
                Need a few more projects to create a portfolio? Communicode
                gives you the opportunity to expand your portfolio, completely free.
              </p>
            </div>
            <div id={home['work-panel']} className={classNames('col-md-4', home['info-panel'])}>
              <h3>Work on What You Love</h3>
              <hr />
              <p>
                Communicode allows you to work on causes you are interested in.
                You give us your interests, we give you matches. Its that simple.
              </p>
            </div>
            <div id={home['help-panel']} className={classNames('col-md-4', home['info-panel'])}>
              <h3>Get the Help You Deserve</h3>
              <hr />
              <p>
                Nonprofits need to be up to date with technology.
                Communicode matches you with people who care about
                what you have to offer.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={classNames('col-md-12', home['create-account'])}>
              <center>
                <div className={main.text}>
                  <h2>We're Under Construction...</h2>
                  <h4>Don't worry, we'll be here soon. And we can't do it without you.</h4>
                  <div className={classNames('input-group', home['input-container'])}>
                    <span className={classNames('input-group-addon', home['email-addon'])} id="basic-addon1"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <input type="text" className={classNames('form-control', home.input)} placeholder="boring@probablygmail.com" aria-describedby="basic-addon1" />
                    <span className={classNames('input-group-btn', home['mail-submit'])}>
                      <button className={classNames('btn', main['primary-btn'], home[''])} type="button">Help Us Change the World <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </span>
                </div>
                </div>
              </center>
            </div>
          </div>
        </div>
    </div>;

export default Home;