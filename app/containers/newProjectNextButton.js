import nextButton from './../components/layout/newProject/nextButton';
import { moveToNextStep } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.newProject.location,
        enabled: (() => {
            switch(ownProps.step) {
                case 1:
                    return !!state.newProject.item;
                case 2:
                    return !!state.newProject.title && !!state.newProject.type && !!state.newProject.description;
                case 3:
                    return true;
                default:
                    return false;
            }
        })()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        moveToNextPage: (location) => dispatch(moveToNextStep(location))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(nextButton);
