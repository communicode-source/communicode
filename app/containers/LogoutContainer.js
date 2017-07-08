import { connect } from 'react-redux';
import { logoutUser } from './../actions/funcs/user';
import Logout from '../components/layout/dynamic/Logout';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: () => dispatch(logoutUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
