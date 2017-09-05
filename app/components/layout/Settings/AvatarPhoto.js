import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import PropTypes from 'prop-types';

import AvatarImageModal from './../../../containers/settings/AvatarImageModal';

class AvatarPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let url = `url(${require('../../../assets/images/profile/default.png')})`;
        if(this.props.user.profile.image && this.props.user.profile.image.avatar) {
            url = `url(https://storage.googleapis.com/user-profile-avatars/${this.props.user.profile.image.avatar})`;
        }
        return (
            <div>
                <div onClick={() => { this.props.onOverlayAvatarImage(true); }} style={{background: url}} className={classNames(styles.avatarContainer, styles.red)} />
                <AvatarImageModal />
            </div>
        );
    }

}

AvatarPhoto.propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    onOverlayAvatarImage: PropTypes.func
};

export default AvatarPhoto;
