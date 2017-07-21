import SaveButton from './../../components/layout/Settings/SaveButton';
import {connect} from 'react-redux';
import {socialsClick} from './../..//actions/funcs/settings';

const mapStateToProps = () => {
    return {
        title: 'Update Social Media'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickFunction: () => dispatch(socialsClick())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
