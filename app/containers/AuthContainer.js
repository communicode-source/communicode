import { connect } from 'react-redux';
import { setRedirectUrl } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        currentURL: ownProps.location.pathname
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRedirectUrl: (currentUrl) => dispatch(setRedirectUrl(currentUrl))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
