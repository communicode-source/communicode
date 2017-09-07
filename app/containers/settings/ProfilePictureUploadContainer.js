import { connect } from 'react-redux';
import { uploadProfileImage } from './../../actions/funcs/settings';
import ProfilePictureUpload from '../../components/layout/Settings/ProfilePictureUpload';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        settings: state.settings,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickProfileUpload: (file) => dispatch(uploadProfileImage(file))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePictureUpload);
