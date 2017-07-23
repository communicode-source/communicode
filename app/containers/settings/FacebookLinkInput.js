import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateFacebook} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'Facebook',
        default: 'https://www.facebook.com/',
        socialClass: 'fa-facebook',
        linkValue: state.settings.facebook
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (fb) => dispatch(updateFacebook(fb))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
