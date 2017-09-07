import Skills from './../../components/layout/Settings/Skills';
import {connect} from 'react-redux';
import {changeSkill, saveSkill} from './../../actions/funcs/settings';

const mapStateToProps = (state) => {
    return {skills: state.settings.skills};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSkill: (skill) => dispatch(changeSkill(skill)),
        saveSkill: () => dispatch(saveSkill())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Skills);
