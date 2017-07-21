import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


class Interests extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    buildInterests() {
        if(!this.props.interests || !this.props.interests.map) {
            return null;
        }
        const node = this.props.interests.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    render() {
        return (
            <div className={classNames(styles.btns)}>
                {this.buildInterests.call(this)} <Link to="/interests">Add More Interests...</Link>
            </div>
        );
    }

}

Interests.propTypes = {
    interests: PropTypes.array
};


export default Interests;
