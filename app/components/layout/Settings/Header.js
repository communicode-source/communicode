import React, { PropTypes } from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        this.props.startLoadIntoSettings();
    }


    render() {
        return (<div></div>);
    }
}

Profile.propTypes = {
    organizationname: PropTypes.string,
    fname: PropTypes.string,
    lname: PropTypes.string,
    startLoadIntoSettings: PropTypes.func
};

export default Profile;
