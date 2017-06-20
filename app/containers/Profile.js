import Profile from './../components/layout/Profile';
import {connect} from 'react-redux';

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
