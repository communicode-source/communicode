import { connect } from 'react-redux';
import { overlayAvatarUpload } from './../../actions/funcs/overlay';
import AvatarImage from './../../components/layout/Settings/AvatarPhoto';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOverlayAvatarImage: (shouldShowModal) => dispatch(overlayAvatarUpload(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AvatarImage);
