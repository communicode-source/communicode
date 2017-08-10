import { connect } from 'react-redux';
import { setRedirectUrl } from './../actions/funcs/redirect';
import { getLoggedInUser } from './../actions/funcs/user';
import Auth from '../components/Auth';

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.isAuthenticated,
        currentURL: ownProps.location.pathname
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRedirectUrl: (currentUrl) => dispatch(setRedirectUrl(currentUrl)),
        getCurrentUser: () => dispatch(getLoggedInUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
