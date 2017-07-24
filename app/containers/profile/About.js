import About from './../../components/layout/Profile/About';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        skills: state.profile.skills,
        interests: state.profile.interests,
        biography: state.profile.biography,
        location: state.profile.location,
        job: state.profile.job,
        fname: (state.profile.accountType === true) ? state.profile.organizationname : state.profile.fname
    };
};


export default connect(mapStateToProps)(About);
