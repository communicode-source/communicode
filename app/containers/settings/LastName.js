import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateLname} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'Last Name',
        socialClass: 'fa-cog',
        linkValue: state.settings.lname,
        noUrl: true,
        show: (state.user.profile.accountType === false)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (name) => dispatch(updateLname(name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
