import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import classNames from 'classnames';

class talentsBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSkillRemove(item) {
        this.props.onSkillRemove(item);
    }

    getTalentsList() {
      // <div class="button">
      //     Skilla <i class="fa fa-times" aria-hidden="true"></i>
      // </div>
        return this.props.skills.map((item, index) => {
            return (<div className={styles.button} key={index} onClick={this.handleSkillRemove.bind(this, item)}>{item}<i className={classNames('fa', 'fa-times')} aria-hidden="true"></i></div>);
        });
    }

    render() {
        return (
            <div className={styles.question}>
                <h4>Confirm the talents needed:</h4>
                <i className={styles.warning}>You must have at least three talents listed.</i>
                <div id={styles.talents}>
                    {this.getTalentsList.call(this)}
                </div>
            </div>
        );
    }
}

talentsBar.propTypes = {
    skills: PropTypes.array,
    onSkillInsert: PropTypes.func,
    onSkillRemove: PropTypes.func
};

export default talentsBar;
