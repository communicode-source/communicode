import React from 'react';
import PropTypes from 'prop-types';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 5) {
            this.props.moveToStepFour();
        }
    }

    render() {
        return (
            <div>
                <h1>Review Your Project</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepFour: PropTypes.func
};

export default newProject;
