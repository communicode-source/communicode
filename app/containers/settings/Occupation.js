import Occupation from './../../components/layout/Settings/Occupation';
import {connect} from 'react-redux';
import {updateOccupation} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {occupation: state.settings.job};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOccupationEnter: (bio) => dispatch(updateOccupation(bio))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Occupation);
