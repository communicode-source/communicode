import Interests from './../../components/layout/Settings/Interests';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {interests: state.user.profile.interests};
};


export default connect(mapStateToProps)(Interests);
