import Profile from './../../components/layout/Profile';
import {connect} from 'react-redux';
import { overlayPortfolioCreateModal } from './../../actions/funcs/overlay';
import { getProfileForUser, toggleFollowingClick } from './../../actions/funcs/user';

const mapStateToProps = (state, props) => {
    return {
        profile: state.profile,
        profile_url: props.params.url,
        userID: state.user.profile._id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: () => dispatch(overlayPortfolioCreateModal(true)),
        onGetProfileForUser: (url) => dispatch(getProfileForUser(url)),
        toggleFollowingClick: (id) => dispatch(toggleFollowingClick(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
