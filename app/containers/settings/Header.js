import Header from './../../components/layout/Settings/Header';
import {loadUserIntoSettings} from './../..//actions/funcs/settings';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        organizationname: state.user.profile.organizationname,
        fname: state.user.profile.fname,
        lname: state.user.profile.lname
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLoadIntoSettings: () => dispatch(loadUserIntoSettings()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
