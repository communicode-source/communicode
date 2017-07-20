import Projects from './../../components/layout/Profile/Projects';
import {connect} from 'react-redux';
import { overlayPortfolioCreateModal } from './../../actions/funcs/overlay';

const mapStateToProps = (state) => {
    return {
        started: state.profile.started,
        completed: state.profile.completed,
        reposi: state.profile.repos,
        projects: state.profile.projects
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        overlayPortfolioCreateModal: () => dispatch(overlayPortfolioCreateModal(true))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects);
