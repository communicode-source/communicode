import { connect } from 'react-redux';
import { overlayCoverUpload } from './../../actions/funcs/overlay';
import CoverPhoto from './../../components/layout/Settings/CoverPhoto';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOverlayCoverImage: (shouldShowModal) => dispatch(overlayCoverUpload(shouldShowModal))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoverPhoto);
