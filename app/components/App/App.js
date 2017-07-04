import React, { PropTypes } from 'react';
import Title from 'react-title-component';

import { Header, Footer } from 'components';

import styles from './app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        // Attempt to Fetch local user if user is authenticated and profile is undefined
        if(this.props.isAuthenticated && this.props.user.profile === undefined) {
            this.props.onGetLoggedInUser(this.props.isAuthenticated);
        }
    }

    render() {
        const {
            children,
            isAuthenticated,
            user,
            shouldShowLoginModal,
            showLoginModal
        } = this.props;

        return (
            <div id={styles['app-container']}>
                <Title render="Communicode"/>
                <Header user={user} isAuthenticated={isAuthenticated} shouldShowLoginModal={shouldShowLoginModal} showLoginModal={showLoginModal} />
                <div id={styles['content-main']}>
                    {children}
                    <div className={styles.push}/>
                </div>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    onGetLoggedInUser: PropTypes.func,
    user: PropTypes.object,
    showLoginModal: PropTypes.func,
    shouldShowLoginModal: PropTypes.bool
};

export default App;