import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import classNames from 'classnames';

class TopicSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleTopicSelect(value) {
        this.props.onTopicSelect(value);
    }

    generateTopics() {
        const returnValue = this.props.topics.map((value, index) => {
            const selected = (this.props.selected.indexOf(value) !== -1) ? true : false;
            return (
                <div onClick={this.handleTopicSelect.bind(this, value)} key={index} className={classNames(styles.item, (selected) ? styles.select : null)}>
                    <img src="https://source.unsplash.com/random" />
                    <div className={classNames(styles.info)}>
                        <i className={classNames('fa', 'icon', 'fa-tree', (!selected) ? null : styles.hide)} aria-hidden="true"></i>
                        <i className={classNames('fa', 'fa-check', (selected) ? null : styles.hide)} aria-hidden="true"></i>
                        <h5>{value}</h5>
                    </div>
                </div>
            );
        });
        returnValue.push(
            <div className={classNames(styles.item, styles.more)}>
                <i className={classNames('fa', 'fa-plus')} aria-hidden="true"></i>
            </div>
        );
        return returnValue;
    }

    render() {
        return (
            <div className={styles.question}>
                <h4>What is this for?</h4>
                <div id={styles.topics}>
                    {this.generateTopics()}
                </div>
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
