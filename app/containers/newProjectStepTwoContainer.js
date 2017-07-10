import MainStepTwo from './../components/layout/newProject/MainStepTwo';
import { moveToStepTwo } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToStepTwo: () => dispatch(moveToStepTwo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainStepTwo);
