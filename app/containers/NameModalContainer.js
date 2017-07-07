import { connect } from 'react-redux';
import { updateName, updateLname, updateFname } from '../actions';
import NameModal from '../components/modals/InterestNameModal';

const mapStateToProps = (state) => {
    return {
        fname: state.user.fname,
        lname: state.user.lname,
        showModal: state.user.showModal,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNameSubmit: () => dispatch(updateName()),
        onFnameEnter: (fname) => dispatch(updateFname(fname)),
        onLnameEnter: (lname) => dispatch(updateLname(lname))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameModal);
