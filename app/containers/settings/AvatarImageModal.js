import { connect } from 'react-redux';
import AvatarImageModal from '../../components/layout/Settings/AvatarImageModal';
import { overlayAvatarUpload } from './../../actions/funcs/overlay';


const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleAvatarModal: (shouldShowModal) => dispatch(overlayAvatarUpload(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvatarImageModal);
