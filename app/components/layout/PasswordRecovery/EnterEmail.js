import React from 'react';
import {Row, Col} from 'react-bootstrap';

class EnterEmail extends React.Component {
    constructor({email, onEmailEnter, onEmailSubmit}) {
        super();
        this.email = email;
        this.onEmailEnter = onEmailEnter;
        this.onEmailSubmit = onEmailSubmit;
    }

    handleEmailEnter(e) {
        this.onEmailEnter(e.target.value);
    }

    handleEmailSubmit() {
        this.onEmailSubmit();
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <label>Enter your Email</label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <input onChange={this.handleEmailEnter.bind(this)} value={this.email} placeholder="johndoe@email.com" />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <button onClick={this.handleEmailSubmit.bind(this)}>Recover Password</button>
                    </Col>
                </Row>
            </Row>
        );
    }
}


export default EnterEmail;
