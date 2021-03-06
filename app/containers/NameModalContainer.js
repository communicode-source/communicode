import { connect } from 'react-redux';
import { updateName, updateLname, updateFname, updateOrgname } from './../actions/funcs/user';
import NameModal from '../components/modals/InterestNameModal';

const mapStateToProps = (state) => {
    return {
        fname: state.user.fname,
        lname: state.user.lname,
        showModal: state.user.showModal,
        orgname: state.user.orgname,
        accountType: state.user.profile.accountType,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNameSubmit: () => dispatch(updateName()),
        onFnameEnter: (fname) => dispatch(updateFname(fname)),
        onLnameEnter: (lname) => dispatch(updateLname(lname)),
        onOrgnameEnter: (orgname) => dispatch(updateOrgname(orgname))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameModal);
