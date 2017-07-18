import newProjectDateSelectors from './../components/layout/newProject/newProjectDateSelectors';
import { selectStartDate, selectEndDate } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        startDate: state.newProject.start,
        endDate: state.newProject.end
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectStartDate: (date) => dispatch(selectStartDate(date)),
        selectEndDate: (date) => dispatch(selectEndDate(date))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(newProjectDateSelectors);
