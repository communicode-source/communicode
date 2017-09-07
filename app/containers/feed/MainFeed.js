import { connect } from 'react-redux';
import { getUserFeed, makeMatch } from './../../actions/funcs/feed';
import ProjectFeed from '../../components/pages/ProjectFeed';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
        projects: state.feed.projects,
        feed: state.feed,
        userid: state.user.profile._id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFeedLoad: (user) => dispatch(getUserFeed(user)),
        makeMatch: (object) => dispatch(makeMatch(object))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectFeed);
