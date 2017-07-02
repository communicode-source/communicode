import { connect } from 'react-redux';

import { logoutUser } from 'actions';
// This logout button export is just a workaround atm
import { LogoutButton } from 'components';

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
)(LogoutButton);
