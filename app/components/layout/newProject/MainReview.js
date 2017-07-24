import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from 'react-stripe-elements';

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
            <Elements>
                <div>
                    <h1>Review and Create</h1>
                    {this.props.children}
                </div>
            </Elements>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.object,
    finishNewProject: PropTypes.func
};

export default newProject;
