import Settings from './../components/layout/Settings';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.user.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
