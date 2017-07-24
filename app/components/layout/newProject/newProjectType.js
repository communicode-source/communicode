import React from 'react';
import PropTypes from 'prop-types';
import styles from './../../../assets/css/pages/createProject.scss';

import Website from './types/website';
import Mobile from './types/mobile';

class TypeBox extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
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

        if(this.props.project.item === 'Website') {
            select = <Website selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        if(this.props.project.item === 'Mobile') {
            select = <Mobile selectProjectType={this.props.selectProjectType} type={this.props.type} />;
        }

        return (
            <div className={styles.question}>
                <h4>Pick a project type:</h4>
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
