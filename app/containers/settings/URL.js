import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateUrl} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'URL',
        socialClass: 'fa-cog',
        linkValue: state.settings.url,
        noUrl: true,
        show: true
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (url) => dispatch(updateUrl(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
