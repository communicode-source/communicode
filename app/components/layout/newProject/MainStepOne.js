import React from 'react';
import PropTypes from 'prop-types';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 1) {
            this.props.moveToStepOne();
        }
    }

    render() {
        return (
            <div>
                <h1>Step 1: Start your project</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepOne: PropTypes.func
};

export default newProject;
