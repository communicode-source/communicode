import TrackSelector from './../components/layout/newProject/TrackSelector';
import { selectedProjectTrack } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        track: state.newProject.track
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectProjectTrack: (item) => dispatch(selectedProjectTrack(item))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackSelector);
