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
                <div className={classNames('row')}>
                    <div className={classNames('col-md-12')}>
                        <h1>Step 1: Start your project</h1>
                    </div>
                </div>
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
