import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateLinkedin} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'LinkedIn',
        socialClass: 'fa-linkedin',
        linkValue: state.settings.linkedin
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (linked) => dispatch(updateLinkedin(linked))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
