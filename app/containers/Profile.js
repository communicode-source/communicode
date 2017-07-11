import Profile from './../components/layout/Profile';
import {connect} from 'react-redux';
import { overlayPortfolioCreateModal } from './../actions/funcs/overlay';

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: () => dispatch(overlayPortfolioCreateModal(true))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
