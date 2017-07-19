import newProjectTitle from './../components/layout/newProject/newProjectTitle';
import { projectTitleEnter } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.newProject.title
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTitleEnter: (title) => dispatch(projectTitleEnter(title))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(newProjectTitle);
