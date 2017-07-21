import Bio from './../../components/layout/Settings/Bio';
import {connect} from 'react-redux';
import {updateBiography} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {biography: state.settings.biography};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBioEnter: (bio) => dispatch(updateBiography(bio))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Bio);
