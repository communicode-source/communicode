import React from 'react';
import Profile from './../../containers/profile/Profile';
import About from './../../containers/profile/About';
import Projects from './../../containers/profile/Projects';
import NPProjects from './../../containers/profile/NPProjects';
import Reviews from './../../containers/profile/Reviews';
import PropTypes from 'prop-types';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <Profile params={this.props.params}>
                    <About/>
                    <Projects/>
                    <Reviews/>
                    <NPProjects />
                </Profile>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    params: PropTypes.object
};

export default ProfilePage;
