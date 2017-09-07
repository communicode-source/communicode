import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateFname} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'First Name',
        socialClass: 'fa-cog',
        linkValue: state.settings.fname,
        noUrl: true,
        show: (state.user.profile.accountType === false)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (name) => dispatch(updateFname(name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
