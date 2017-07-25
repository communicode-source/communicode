import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/profile.scss';
import { Link } from 'react-router';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.active = 'About';
    }

    componentDidMount() {
        this.props.onGetProfileForUser(
            this.props.profile_url
        );
    }

    componentWillReceiveProps(props) {
        this.props = props;
        if(this.props.profile_url !== this.props.profile.url && this.props.profile.isFetching === false) {
            this.props.onGetProfileForUser(
                this.props.profile_url
            );
        }
    }

    handleLinkClick(e) {
        this.active = e.target.innerHTML;
        this.forceUpdate();
    }

    handleFollowClick() {
        this.props.toggleFollowingClick(this.props.profile._id);
    }

    render() {
        let name = this.props.profile.organizationname;
        let avatarUrl = require('../../../assets/images/profile/avatar.jpg');
        let coverUrl = `url(${require('../../../assets/images/profile/cover.jpg')})`;
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

        if(this.props.profile.image !== undefined) {
            if(this.props.profile.image.avatar) {
                avatarUrl = 'https://storage.googleapis.com/user-profile-avatars/' + this.props.profile.image.avatar;
            }

            if(this.props.profile.image.cover) {
                coverUrl = `url(https://storage.googleapis.com/user-profile-cover/${this.props.profile.image.cover})`;
            }
        }

        if(this.props.profile.socials) {
            socialBar = (<div id={classNames(styles.socials)}>
                <a href={this.props.profile.socials.facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href={this.props.profile.socials.twitter} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href={this.props.profile.socials.github} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                <a href={this.props.profile.socials.linkedin} target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>);
        }

        return (
            <div>
                <div id={classNames(styles.header)}>
                    <div style={{background: coverUrl}} id={classNames(styles.headerBg)}></div>
                    <img src={avatarUrl} className={classNames(styles.profilePic)} />
                    <div id={classNames(styles.info)}>
                        <h1>{name}</h1>
                        {(this.props.userID !== this.props.profile._id && this.props.userID) &&
                            <div onClick={this.handleFollowClick.bind(this)} id={classNames(styles.follow)}>{(this.props.profile.isFollow === false) ? 'Follow' : 'Unfollow'}</div>
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
                                <p><b>{this.props.profile.following || 0}</b> <br /> Following</p>
                            </div>
                            <div id={classNames(styles.right)}>
                                <p><b>{this.props.profile.followers || 0}</b> <br /> Followers</p>
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
    userID: PropTypes.string,
    toggleFollowingClick: PropTypes.func
};

export default Profile;
