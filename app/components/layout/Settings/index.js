import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import About from './About';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleLinkClick(e) {
        this.active = e.target.innerHTML;
        this.forceUpdate();
    }

    render() {
        let name = this.props.user.organizationname;
        let socialBar = (<div></div>);
        let main;

        if(!this.props.user.organizationname) {
            name = this.props.user.fname + ' ' + this.props.user.lname;
        }

        if(!this.props.user.organizationname && !this.props.user.fname) {
            name = '';
        }

        if(this.active === 'About') {
            main = (<About
                fname={this.props.user.fname}
                biography={this.props.user.biography}
                skills={this.props.user.skills}
                location={this.props.user.location}
                job={this.props.user.job}
                interests={this.props.user.interests}
            />);
        }

        if(this.props.user.social) {
            socialBar = (<div id={classNames(styles.socials)}>
                <a href={this.props.user.social.facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>);
        }

        return (
            <div>
                <div id={classNames(styles.header)}>
                    <div id={classNames(styles.headerBg)}></div>
                    <div style={{background: 'url(https://source.unsplash.com/random)'}} className={classNames(styles.avatarContainer, styles.red)}>
                    </div>
                    <div id={classNames(styles.info)}>
                        <h1>{name}</h1>
                        {socialBar}
                    </div>
                </div>
                {main}
            </div>
        );
    }
}

Profile.propTypes = {
    onTogglePortfolioModal: PropTypes.func,
    onGetProfileForUser: PropTypes.func,
    user: PropTypes.object
};

export default Profile;
