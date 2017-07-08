import Profile from './../components/layout/Profile';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        default: () => dispatch(null)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
