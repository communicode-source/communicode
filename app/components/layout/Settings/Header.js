import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        let name = this.props.organizationname;

        if(!this.props.organizationname) {
            name = this.props.fname + ' ' + this.props.lname;
        }

        if(!this.props.organizationname && !this.props.fname) {
            name = '';
        }

        return (
            <div id={classNames(styles.info)}>
                <h1>{name}</h1>
            </div>
        );
    }
}

Profile.propTypes = {
    organizationname: PropTypes.string,
    fname: PropTypes.string,
    lname: PropTypes.string
};

export default Profile;
