import SaveButton from './../../components/layout/Settings/SaveButton';
import {connect} from 'react-redux';
import {saveSkill} from './../..//actions/funcs/settings';

const mapStateToProps = () => {
    return {
        title: 'Save Changes'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickFunction: () => dispatch(saveSkill())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
