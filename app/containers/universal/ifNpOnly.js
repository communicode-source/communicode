import ifNpOnly from './../../components/layout/dynamic/conditionalRender';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        render: (state.user.profile.accountType === true)
    };
};

export default connect(mapStateToProps)(ifNpOnly);
