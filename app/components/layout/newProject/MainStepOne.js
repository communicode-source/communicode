import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
                <div className={classNames('col-sm-12', 'col-md-8', 'col-lg-8')}>
                    {this.props.children[0]}
                    <h1>Step 1: Start your project</h1>
                    <h4>What are you looking for?</h4>
                    {this.props.children[1]}
                    {this.props.children[2]}
                    <p>This would be a button to move on to the next step</p>
                </div>
            </div>
        );
    }
}

newProject.propTypes = {
    location: PropTypes.number,
    children: PropTypes.object,
    moveToStepOne: PropTypes.func
};

export default newProject;
