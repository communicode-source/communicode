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

    render() {
        return (
            <div>
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
