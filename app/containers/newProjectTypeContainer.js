import newProjectType from './../components/layout/newProject/newProjectType';
import { projectTypeSelection } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        type: state.newProject.type
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTypeEnter: (title) => dispatch(projectTypeSelection(title))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(newProjectType);
