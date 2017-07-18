import React from 'react';
import PropTypes from 'prop-types';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 2) {
            this.props.moveToStepTwo();
        }
    }

    render() {
        return (
            <div>
                <h1>Step 2: Tell us more</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepTwo: PropTypes.func
};

export default newProject;
