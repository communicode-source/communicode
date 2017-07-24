import ReviewTicket from './../components/layout/newProject/ReviewTicket';
import { finishReviewNewProject } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        project: state.newProject
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        finishProject: (token) => dispatch(finishReviewNewProject(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTicket);
