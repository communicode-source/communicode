import nextButton from './../components/layout/newProject/nextButton';
import { moveToNextStep } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToNextPage: (location) => dispatch(moveToNextStep(location))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(nextButton);
