import { connect } from 'react-redux';
import { uploadCoverImage } from './../../actions/funcs/settings';
import CoverPhotoUpload from '../../components/layout/Settings/CoverPhotoUpload';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        settings: state.settings,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCoverUpload: (file) => dispatch(uploadCoverImage(file))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoverPhotoUpload);
