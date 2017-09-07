import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

class DescriptionBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleDescriptionEnter(e) {
        this.props.onDescriptionEnter(e.target.value);
    }

    render() {
        let greeting = (<h4>Give it a description:</h4>);
        let placeholder = 'New super awesome creation...';
        if(this.props.item === 'Issues') {
            greeting = <h4>Describe your Issue:</h4>;
            placeholder = 'Thoroughly describe your issue here...';
        }

        return (
            <div className={styles.question}>
                {greeting}
                <textarea value={this.props.description} onChange={this.handleDescriptionEnter.bind(this)} placeholder={placeholder}/>
            </div>
        );
    }
}

DescriptionBox.propTypes = {
    description: PropTypes.string,
    onDescriptionEnter: PropTypes.func,
    item: PropTypes.string
};

export default DescriptionBox;
