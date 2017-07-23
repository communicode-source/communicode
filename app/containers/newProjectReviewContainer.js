import Review from './../components/layout/newProject/MainReview';
import { finishNewProject } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        finishNewProject: () => dispatch(finishNewProject())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
