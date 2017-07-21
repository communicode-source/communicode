import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateTwitter} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'Twitter',
        socialClass: 'fa-twitter',
        linkValue: state.settings.twitter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (twitter) => dispatch(updateTwitter(twitter))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
