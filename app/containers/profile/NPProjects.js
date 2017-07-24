import Projects from './../../components/layout/Profile/NPProjects';
import {connect} from 'react-redux';
import { getNonProfitProjects, updateProjectToBeComplete, deleteProjectNP } from './../../actions/funcs/user';

const mapStateToProps = (state) => {
    return {
        projects: state.profile.projects,
        account: state.profile.accountType,
        id: state.user.profile._id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNonProfitProjects: () => dispatch(getNonProfitProjects()),
        checkProjectOff: (id) => dispatch(updateProjectToBeComplete(id)),
        deleteProject: (id) => dispatch(deleteProjectNP(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects);
