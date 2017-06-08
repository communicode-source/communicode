import { connect } from 'react-redux';
import { getLoggedInUser } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetLoggedInUser: (isAuthenticated) => dispatch(getLoggedInUser(isAuthenticated))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
