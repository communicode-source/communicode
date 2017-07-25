import React, { PropTypes } from 'react';
import Rodal from 'rodal';
import styles from './../../../assets/css/pages/settings.scss';
import ProfilePictureUpload from './../../../containers/settings/ProfilePictureUploadContainer';
// include styles
// import 'rodal/lib/rodal.css';

class AvatarImageModal extends React.Component {

    constructor(props) {
        super(props);
        super(props);
        this.props = props;
    }

    hide() {
        this.props.onToggleAvatarModal(false);
    }

    render() {
        if(this.props.overlay.shouldShowAvatarImageModal) {
            return (
                <Rodal
                  width={500}
                  height={300}
                  className={styles.modal}
                  visible={this.props.overlay.shouldShowAvatarImageModal}
                  onClose={this.hide.bind(this)}>
                    <ProfilePictureUpload />
                </Rodal>
            );
        }
        return (
            <div></div>
        );
    }
}

AvatarImageModal.propTypes = {
    overlay: PropTypes.object,
    error: PropTypes.string,
    onToggleAvatarModal: PropTypes.func,
};

export default AvatarImageModal;
