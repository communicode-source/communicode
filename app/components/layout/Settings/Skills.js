import React from 'react';
import classNames from 'classnames';
import styles from './../../../assets/css/pages/settings.scss';
import PropTypes from 'prop-types';


class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    buildSkills() {
        console.log(this.props.skills);
        if(!this.props.skills || !this.props.skills.map) {
            return null;
        }
        const node = this.props.skills.map((item, index) => <p key={index} className={classNames(styles.button)}>{item}</p>);
        return node;
    }

    render() {
        return (
            <div className={classNames(styles.btns)}>
                {this.buildSkills.call(this)}
            </div>
        );
    }

}

Skills.propTypes = {
    skills: PropTypes.array
};


export default Skills;
