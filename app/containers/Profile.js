import Profile from './../components/layout/Profile';
import {connect} from 'react-redux';
import { overlayPortfolioCreateModal } from './../actions/funcs/overlay';
import { getProfileForUser } from './../actions/funcs/user';

const mapStateToProps = (state, props) => {
    return {
        profile: state.profile,
        profile_url: props.params.url
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: () => dispatch(overlayPortfolioCreateModal(true)),
        onGetProfileForUser: (url) => dispatch(getProfileForUser(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
