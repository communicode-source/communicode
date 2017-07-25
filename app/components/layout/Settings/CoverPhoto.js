import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import PropTypes from 'prop-types';

import CoverPhotoModal from './../../../containers/settings/CoverPhotoModal';

class AvatarPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let url = 'url(https://source.unsplash.com/random)';
        if(this.props.user.profile.image && this.props.user.profile.image.cover) {
            url = `url(https://storage.googleapis.com/user-profile-cover/${this.props.user.profile.image.cover})`;
        }
        return (
            <div>
                <div onClick={() => { this.props.onOverlayCoverImage(true); }} style={{background: url}} id={classNames(styles.headerBg)} />
                <CoverPhotoModal />
            </div>
        );
    }

}

AvatarPhoto.propTypes = {
    user: PropTypes.object,
    error: PropTypes.string,
    onOverlayCoverImage: PropTypes.func
};

export default AvatarPhoto;
