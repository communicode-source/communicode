import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

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
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <h1>Step 3: Give us the details</h1>
                    </Col>
                </Row>
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
