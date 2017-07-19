import MainStepOne from './../components/layout/newProject/MainStepOne';
import { moveToStepOne } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToStepOne: () => dispatch(moveToStepOne())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainStepOne);
