import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

import Website from './types/website';
import Mobile from './types/mobile';
import Setup from './types/setup';
import Backend from './types/backend';

class TypeBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.project.item === 'Issues') {
            this.handleTypeSelect({
                target: {
                    value: 'Issue'
                }
            });
        }
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    handleTypeSelect(e) {
        if(e.target.value === 'Select...') {
            return this.props.selectProjectType('');
        }
        return this.props.selectProjectType(e.target.value);
    }

    render() {
        let select;
        let greeting = (<h4>Pick a project type:</h4>);
        if(this.props.project.item === 'Website') {
            select = <Website selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        if(this.props.project.item === 'Mobile') {
            select = <Mobile selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        if(this.props.project.item === 'Setup') {
            select = <Setup selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        if(this.props.project.item === 'Backend') {
            select = <Backend selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        if(this.props.project.item === 'Issues') {
            greeting = <div></div>;
            select = <div></div>;
        }

        return (
            <div className={styles.question}>
                {greeting}
                {select}
            </div>
        );
    }
}

TypeBox.propTypes = {
    project: PropTypes.object,
    type: PropTypes.string,
    selectProjectType: PropTypes.func
};

export default TypeBox;
