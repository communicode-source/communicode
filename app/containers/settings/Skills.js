import Skills from './../../components/layout/Settings/Skills';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {skills: state.settings.skills};
};


export default connect(mapStateToProps)(Skills);
