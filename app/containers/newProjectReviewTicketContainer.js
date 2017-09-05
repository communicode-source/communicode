import ReviewTicket from './../components/layout/newProject/ReviewTicket';
import { finishReviewNewProject, finishReviewVolunteerProject } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        project: state.newProject,
        isLoading: state.newProject.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        finishProject: (token) => dispatch(finishReviewNewProject(token)),
        onConfirmProject: () => dispatch(finishReviewVolunteerProject())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTicket);
