import SocialLinkForm from './../../components/layout/Settings/SocialLinkForm';
import {connect} from 'react-redux';
import {updateGithub} from './../..//actions/funcs/settings';

const mapStateToProps = (state) => {
    return {
        socialText: 'Github',
        socialClass: 'fa-github',
        default: 'https://www.github.com/',
        linkValue: state.settings.github
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        socialEnterFunc: (github) => dispatch(updateGithub(github))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocialLinkForm);
