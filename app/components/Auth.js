import React, { PropTypes } from 'react';
import LoginModal from '../containers/LoginContainer';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.props.getCurrentUser();
    }

    componentDidMount() {
        // Attempt to Fetch local user if user is authenticated and profile is undefined
        if(this.props.isAuthenticated === true) {
            this.props.setRedirectUrl(this.props.currentURL);
        }
    }

    render() {
        let modal;
        if(!this.props.isAuthenticated) {
            modal = (<LoginModal shouldShowModalAuth />);
        }
        return (
            <div>
                {modal}
                {this.props.children}
            </div>
        );
    }
}

Auth.propTypes = {
    children: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    setRedirectUrl: PropTypes.func,
    currentURL: PropTypes.string,
    getCurrentUser: PropTypes.func
};

export default Auth;
