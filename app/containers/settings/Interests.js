import Interests from './../../components/layout/Settings/Interests';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {interests: state.settings.interests};
};


export default connect(mapStateToProps)(Interests);
