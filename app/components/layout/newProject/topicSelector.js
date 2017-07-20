import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';

class TopicSelector extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    handleTopicSelect(value) {
        this.props.onTopicSelect(value);
    }

    generateTopics() {
        const returnValue = this.props.userInterests.map((value, index) => {
            const selected = (this.props.selected.indexOf(value) !== -1) ? true : false;
            return (
                <Col xs={12} sm={4} md={3} lg={3} onClick={this.handleTopicSelect.bind(this, value)} key={index} className={classNames(styles.item, (selected) ? styles.select : null)}>
                    <img src="https://source.unsplash.com/random" />
                    <div className={classNames(styles.info)}>
                        <div className={classNames(styles.imageOverlayText)}>
                            <i className={classNames('fa', 'icon', 'fa-plus', (!selected) ? null : styles.hide)} aria-hidden="true"></i>
                            <i className={classNames('fa', 'fa-check', (selected) ? null : styles.hide)} aria-hidden="true"></i>
                            <h5>{value}</h5>
                        </div>
                    </div>
                </Col>
            );
        });
        return returnValue;
    }

    render() {
        return (
            <div className={styles.question}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h4>What is this for?</h4>
                    </Col>
                </Row>
                <Row id={styles.topics}>
                    {this.generateTopics()}
                </Row>
            </div>
        );
    }
}

TopicSelector.propTypes = {
    selected: PropTypes.array,
    topics: PropTypes.array,
    userInterests: PropTypes.array,
    onTopicSelect: PropTypes.func
};

export default TopicSelector;
