import MainStepThree from './../components/layout/newProject/MainStepThree';
import { moveToStepThree } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToStepThree: () => dispatch(moveToStepThree())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainStepThree);
