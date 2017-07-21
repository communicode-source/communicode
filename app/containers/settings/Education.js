import Education from './../../components/layout/Settings/Education';
import {connect} from 'react-redux';
import {updateEducation} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {education: state.settings.education};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEducationEnter: (edu) => dispatch(updateEducation(edu))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Education);
