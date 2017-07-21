import SaveButton from './../../components/layout/Settings/SaveButton';
import {connect} from 'react-redux';
import {aboutClick} from './../..//actions/funcs/settings';

const mapStateToProps = () => {
    return {
        title: 'Update About Me'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickFunction: () => dispatch(aboutClick())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
