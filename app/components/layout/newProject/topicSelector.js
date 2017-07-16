import React from 'react';
import PropTypes from 'prop-types';

class TopicSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleDescriptionEnter(e) {
        this.onTopicSelect(e.target.value);
    }

    generateTopics() {
        const returnValue = this.props.topics.map((value, index) => {
            const selected = (this.props.selected.indexOf(value) !== -1) ? true : false;
            return (<p key={index}>{value} is{(!selected) ? ' not' : null} selected</p>);
        });
        returnValue.push(<p key={-1}>More...</p>);
        return returnValue;
    }

    render() {
        return (
            <div>
                <p>What is this for?</p>
                {this.generateTopics()}
            </div>
        );
    }
}

TopicSelector.propTypes = {
    selected: PropTypes.array,
    topics: PropTypes.array,
    onTopicSelect: PropTypes.func
};

export default TopicSelector;
