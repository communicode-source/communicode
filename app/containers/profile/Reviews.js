import Reviews from './../../components/layout/Profile/Reviews';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        reviews: state.profile.reviews
    };
};

export default connect(mapStateToProps)(Reviews);
