import StripeAccount from './../../components/layout/Settings/StripeAccount';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isCustomer: state.user.profile.customer.isCustomer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        default: () => dispatch(null)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(StripeAccount);
