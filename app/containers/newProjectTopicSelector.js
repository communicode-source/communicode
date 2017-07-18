import topicSelector from './../components/layout/newProject/topicSelector';
import { selectTopic } from './../actions/funcs/newProject';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        selected: state.newProject.interestArea,
        topics: state.newProject.possibleInterests
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelect: (topic) => dispatch(selectTopic(topic))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(topicSelector);
