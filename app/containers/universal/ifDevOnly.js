import ifDevOnly from './../../components/layout/dynamic/conditionalRender';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        render: (state.user.profile.accountType === false)
    };
};

export default connect(mapStateToProps)(ifDevOnly);
