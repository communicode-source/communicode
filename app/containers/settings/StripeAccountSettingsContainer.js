import StripeAccount from './../../components/layout/Settings/StripeAccount';
import {removeStripeAccountClick, checkCodeForUnlinking, getMostRecentUser} from './../../actions/funcs/settings';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isCustomer: state.user.profile.customer.isCustomer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmailClick: () => dispatch(removeStripeAccountClick()),
        checkCodeClick: (code) => dispatch(checkCodeForUnlinking(code)),
        getMostRecentUser: () => dispatch(getMostRecentUser())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(StripeAccount);
