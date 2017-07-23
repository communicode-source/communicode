import React from 'react';
import PropTypes from 'prop-types';

class newProject extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount() {
        if(this.props.location !== 4) {
            this.props.finishNewProject();
        }
    }

    render() {
        return (
            <div>
                <h1>Review and Create</h1>
                {this.props.children}
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.array,
    finishNewProject: PropTypes.func
};

export default newProject;
