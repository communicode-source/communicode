import talentsBar from './../components/layout/newProject/talentsBar';
import { removeSkill } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        skills: state.newProject.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSkillRemove: (item) => dispatch(removeSkill(item))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(talentsBar);
