import ReviewTicket from './../components/layout/newProject/ReviewTicket';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        project: state.newProject
    };
};

export default connect(mapStateToProps)(ReviewTicket);
