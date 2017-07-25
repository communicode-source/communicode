import { connect } from 'react-redux';
import { getUserFeed } from './../../actions/funcs/feed';
import ProjectFeed from '../../components/pages/ProjectFeed';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.user.error,
        projects: state.feed.projects,
        feed: state.feed
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFeedLoad: (user) => dispatch(getUserFeed(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectFeed);
