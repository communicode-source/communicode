import ProgressBar from './../components/layout/newProject/ProgressBar';
import { moveToStepOne, moveToStepTwo, moveToStepThree, moveToStepFour, moveToStepFive } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location,
        completed: state.newProject.completed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToStepOne: () => dispatch(moveToStepOne()),
        moveToStepTwo: () => dispatch(moveToStepTwo()),
        moveToStepThree: () => dispatch(moveToStepThree()),
        moveToStepFour: () => dispatch(moveToStepFour()),
        moveToStepFive: () => dispatch(moveToStepFive())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
