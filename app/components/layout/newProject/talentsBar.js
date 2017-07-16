import React from 'react';
import PropTypes from 'prop-types';

class talentsBar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleSkillRemove(e) {
        this.props.onSkillRemove(e.target.innerHTML);
    }

    getTalentsList() {
        return this.props.skills.map((item, index) => {
            return (<p key={index} onClick={this.handleSkillRemove.bind(this)}>{item}</p>);
        });
    }

    render() {
        return (
            <div>
                {this.getTalentsList.call(this)}
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
