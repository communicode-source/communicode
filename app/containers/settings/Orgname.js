import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateOrgname} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'Org Name',
        socialClass: 'fa-cog',
        linkValue: state.settings.organizationname,
        noUrl: true,
        show: (state.user.profile.accountType === true)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (name) => dispatch(updateOrgname(name))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
