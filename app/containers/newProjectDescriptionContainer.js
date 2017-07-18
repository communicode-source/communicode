import newProjectDescription from './../components/layout/newProject/newProjectDescription';
import { projectDescriptionEnter } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        description: state.newProject.description
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDescriptionEnter: (description) => dispatch(projectDescriptionEnter(description))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(newProjectDescription);
