import ProgressBar from './../components/layout/newProject/ProgressBar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        location: state.newProject.location,
        completed: state.newProject.completed
    };
};


export default connect(mapStateToProps)(ProgressBar);
