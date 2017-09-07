import React, { PropTypes } from 'react';
import Rodal from 'rodal';
import styles from './../../../assets/css/pages/settings.scss';
import CoverPhotoUpload from './../../../containers/settings/CoverUpload';
// include styles
// import 'rodal/lib/rodal.css';

class CoverImageModal extends React.Component {

    constructor(props) {
        super(props);
        super(props);
        this.props = props;
    }

    hide() {
        this.props.onToggleCoverModal(false);
    }

    render() {
        if(this.props.overlay.shouldShowCoverImageModal) {
            return (
                <Rodal
                  width={500}
                  height={300}
                  className={styles.modal}
                  visible={this.props.overlay.shouldShowCoverImageModal}
                  onClose={this.hide.bind(this)}>
                    <CoverPhotoUpload />
                </Rodal>
            );
        }
        return (
            <div></div>
        );
    }
}

CoverImageModal.propTypes = {
    overlay: PropTypes.object,
    error: PropTypes.string,
    onToggleCoverModal: PropTypes.func,
};

export default CoverImageModal;
