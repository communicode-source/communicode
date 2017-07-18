import MainStepFour from './../components/layout/newProject/MainStepFour';
import { moveToStepFour } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToStepFour: () => dispatch(moveToStepFour())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainStepFour);
