import Header from './../../components/layout/Settings/Header';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        organizationname: state.user.profile.organizationname,
        fname: state.user.profile.fname,
        lname: state.user.profile.lname
    };
};

export default connect(mapStateToProps)(Header);
