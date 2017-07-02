import {connect} from 'react-redux';

// I don't know what this file is supposed to be
import Profile from '../../../components/pages/Profile/data';

const mapStateToProps = (state) => {
    return {
        profile: null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        default: event => null
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
