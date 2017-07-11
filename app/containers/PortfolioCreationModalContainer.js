import { connect } from 'react-redux';
import PortfolioCreationModal from '../components/modals/PortfolioCreationModal';
import { overlayPortfolioCreateModal } from './../actions/funcs/overlay';

const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTogglePortfolioModal: (shouldShowModal) => dispatch(overlayPortfolioCreateModal(shouldShowModal)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PortfolioCreationModal);
