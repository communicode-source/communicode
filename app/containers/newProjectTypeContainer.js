import newProjectType from './../components/layout/newProject/newProjectType';
import { projectTypeSelection } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        project: state.newProject,
        type: state.newProject.type
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProjectType: (type) => dispatch(projectTypeSelection(type))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(newProjectType);
