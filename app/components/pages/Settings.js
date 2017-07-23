import React from 'react';
import Header from './../../containers/settings/Header';
import Biography from './../../containers/settings/Biography';
import Location from './../../containers/settings/Location';
import Occupation from './../../containers/settings/Occupation';
import Education from './../../containers/settings/Education';
import AboutButton from './../../containers/settings/AboutButton';
import SkillsButton from './../../containers/settings/SkillsButton';
import SocialMediaButton from './../../containers/settings/SocialMediaButton';
import FacebookLinkInput from './../../containers/settings/FacebookLinkInput';
import TwitterLinkInput from './../../containers/settings/TwitterLinkInput';
import LinkedinLinkInput from './../../containers/settings/LinkedinLinkInput';
import GithubLinkInput from './../../containers/settings/GithubLinkInput';
import FirstName from './../../containers/settings/FirstName';
import LastName from './../../containers/settings/LastName';
import Skills from './../../containers/settings/Skills';
import Interests from './../../containers/settings/Interests';
import styles from './../../assets/css/pages/settings.scss';
import classNames from 'classnames';
import {Form} from 'react-bootstrap';

class SettingsPage extends React.Component {
    render() {
        return (
            <div>
                <div id={classNames(styles.header)}>
                    <div id={classNames(styles.headerBg)} />
                    <div style={{background: 'url(https://source.unsplash.com/random)'}} className={classNames(styles.avatarContainer, styles.red)} />
                    <Header />
                </div>
                <div id={styles.about}>
                    <div className={styles.item}>
                        <h3>About</h3>
                        <hr />
                        <Form horizontal>
                            <FirstName />
                            <LastName />
                            <Biography />
                            <Location />
                            <Occupation />
                            <Education />
                            <AboutButton />
                        </Form>
                    </div>
                    <div className={styles.item}>
                        <h3>Social Media</h3>
                        <hr />
                        <Form horizontal>
                            <FacebookLinkInput />
                            <TwitterLinkInput />
                            <LinkedinLinkInput />
                            <GithubLinkInput />
                            <SocialMediaButton />
                        </Form>
                    </div>
                    <div className={styles.item}>
                        <h3>Skills</h3>
                        <hr />
                        <Skills />
                        <SkillsButton />
                    </div>
                    <div className={styles.item}>
                        <h3>Interests</h3>
                        <hr />
                        <Interests />
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsPage;
