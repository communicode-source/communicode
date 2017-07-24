import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import { Link } from 'react-router';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.active = 'About';
        this.location = 'Westfield, IN';
        this.follows = '20';
        this.job = 'Communicode';
        this.followers = '35';
        this.socials = {
            Twitter: 'https://lalalala.com',
            Github: 'https://lolwearentusinggithub.com',
            Facebook: 'https://deleted.com'
        };
    }

    componentDidMount() {
        this.props.onGetProfileForUser(
            this.props.profile_url
        );
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleLinkClick(e) {
        this.active = e.target.innerHTML;
        this.forceUpdate();
    }

    render() {
        let name = this.props.profile.organizationname;
        let socialBar = (<div></div>);
        let main;

        if(!this.props.profile.organizationname) {
            name = this.props.profile.fname + ' ' + this.props.profile.lname;
        }

        if(!this.props.profile.organizationname && !this.props.profile.fname) {
            name = '';
        }

        if(this.active === 'About') {
            main = this.props.children[0];
        }

        if(this.active === 'Portfolio') {
            main = null;
        }

        if(this.active === 'Reviews') {
            main = this.props.children[2];
        }

        if(this.active === 'Projects') {
            main = this.props.children[3];
        }

        if(this.props.profile.social) {
            socialBar = (<div id={classNames(styles.socials)}>
                <a href={this.props.profile.social.facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>);
        }

        return (
            <div>
                <div id={classNames(styles.header)}>
                    <div id={classNames(styles.headerBg)}></div>
                    <img src="https://source.unsplash.com/random" className={classNames(styles.profilePic)} />
                    <div id={classNames(styles.info)}>
                        <h1>{name}</h1>
                        {this.props.userID !== this.props.profile._id &&
                            <div id={classNames(styles.follow)}>Follow</div>
                        }

                        {this.props.userID === this.props.profile._id &&
                            <Link className={styles.editProfile} to="/me/settings">
                                <div id={classNames(styles.follow)}>Edit Profile</div>
                            </Link>
                        }
                        {!this.props.profile.accountType &&
                            <div className={classNames(styles.rating, styles.stars)}>
                                <i className={classNames('fa', 'fa-star')} aria-hidden="true"></i>
                                <i className={classNames('fa', 'fa-star')} aria-hidden="true"></i>
                                <i className={classNames('fa', 'fa-star')} aria-hidden="true"></i>
                                <i className={classNames('fa', 'fa-star')} aria-hidden="true"></i>
                                <i className={classNames('fa', 'fa-star-half-o')} aria-hidden="true"></i>
                            </div>
                        }
                        <div id={classNames(styles.followContainer)}>
                            <div id={classNames(styles.left)}>
                                <p><b>{this.follows}</b> <br /> Following</p>
                            </div>
                            <div id={classNames(styles.right)}>
                                <p><b>{this.followers}</b> <br /> Followers</p>
                            </div>
                        </div>
                        {socialBar}
                    </div>
                </div>
                <div id={classNames(styles.linkNav)}>
                    <h5 onClick={this.handleLinkClick.bind(this)} className={classNames(styles.link, (this.active === 'About') ? styles.active : styles.inactive)} id={classNames(styles.abtLnk)}>About</h5>
                    {this.props.profile.accountType === false && <h5 onClick={this.handleLinkClick.bind(this)} className={classNames(styles.link, (this.active === 'Reviews') ? styles.active : styles.inactive)} id={classNames(styles.rvwLnk)}>Reviews</h5>}
                    {this.props.profile.accountType === true && <h5 onClick={this.handleLinkClick.bind(this)} className={classNames(styles.link, (this.active === 'Projects') ? styles.active : styles.inactive)} id={classNames(styles.rvwLnk)}>Projects</h5>}
                </div>
                {main}
            </div>

        );
    }
}

Profile.propTypes = {
    onTogglePortfolioModal: PropTypes.func,
    onGetProfileForUser: PropTypes.func,
    profile_url: PropTypes.string,
    profile: PropTypes.object,
    repositories: PropTypes.array,
    projects: PropTypes.array,
    reviews: PropTypes.array,
    children: PropTypes.array,
    userID: PropTypes.string
};

export default Profile;
