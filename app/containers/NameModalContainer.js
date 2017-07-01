import { connect } from 'react-redux';
import { updateName, overlayNameModal } from '../actions';
import NameModal from '../components/modals/NameModal';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
        shouldShowModal: state.overlay.shouldShowNameModal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateName: (user) => dispatch(updateName(user)),
        onOverlayNameModal: (shouldShowModal) => dispatch(overlayNameModal(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameModal);
