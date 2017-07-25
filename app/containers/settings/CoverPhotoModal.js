import { connect } from 'react-redux';
import CoverPhotoModal from '../../components/layout/Settings/CoverPhotoModal';
import { overlayCoverUpload } from './../../actions/funcs/overlay';


const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleCoverModal: (shouldShowModal) => dispatch(overlayCoverUpload(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoverPhotoModal);
