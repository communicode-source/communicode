import { connect } from 'react-redux';
import { makeDeposit, getCompletedProjects, requestPayment } from './../actions/funcs/user';
import CompleteProject from '../components/pages/CompleteProject';

const mapStateToProps = (state, props) => {
    return {
        user: state.user,
        error: state.user.error,
        projectId: props.params.id,
        project: state.project.cproject
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (user) => dispatch(makeDeposit(user)),
        onGetComplete: (id) => dispatch(getCompletedProjects(id)),
        requestPayment: (id) => dispatch(requestPayment(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompleteProject);
