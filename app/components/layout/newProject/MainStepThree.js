import React from 'react';
import PropTypes from 'prop-types';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 3) {
            this.props.moveToStepThree();
        }
    }

    render() {
        return (
            <div>
                <h1>Step 3: Give us the details</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    moveToStepThree: PropTypes.func
};

export default newProject;
