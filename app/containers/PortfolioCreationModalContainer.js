import { connect } from 'react-redux';
import PortfolioCreationModal from '../components/modals/PortfolioCreationModal';
import { overlayPortfolioCreateModal } from './../actions/funcs/overlay';
import { validateProjectName } from './../actions/funcs/projects';


const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: (shouldShowModal) => dispatch(overlayPortfolioCreateModal(shouldShowModal)),
        onValidateProjectName: (name) => dispatch(validateProjectName(name))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioCreationModal);
