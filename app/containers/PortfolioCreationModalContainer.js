import { connect } from 'react-redux';
import PortfolioCreationModal from '../components/modals/PortfolioCreationModal';
import { overlayPortfolioCreateModal } from './../actions/funcs/overlay';
import { validateProjectName, createNewPortfolioProject } from './../actions/funcs/projects';


const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        projectName: state.project.newProjectName,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: (shouldShowModal) => dispatch(overlayPortfolioCreateModal(shouldShowModal)),
        onValidateProjectName: (name) => dispatch(validateProjectName(name)),
        onCreateNewPortfolioProject: () => dispatch(createNewPortfolioProject())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioCreationModal);
