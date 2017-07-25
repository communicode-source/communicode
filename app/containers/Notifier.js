import { connect } from 'react-redux';
import { removeOldestMessage } from './../actions/funcs/notifier';
import Notifier from '../components/layout/dynamic/Notifier.js';

const mapStateToProps = (state) => {
    return {
        messages: state.notifier.messages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeOldestMessage: () => dispatch(removeOldestMessage())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifier);
