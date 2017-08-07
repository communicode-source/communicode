import React from 'react';
import { Row, Col } from 'react-bootstrap';

class EnterPassword extends React.Component {
    constructor({password, onPasswordEnter, onPasswordSubmit}) {
        super();
        this.password = password;
        this.onPasswordEnter = onPasswordEnter;
        this.onPasswordSubmit = onPasswordSubmit;
    }

    handlePasswordEnter(e) {
        this.onPasswordEnter(e.target.value);
    }

    handlePasswordSubmit() {
        this.onPasswordSubmit();
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <label>Enter your Password</label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <input type="password" onChange={this.handlePasswordEnter.bind(this)} value={this.password} placeholder="Must have at least 6 characters..." />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <button onClick={this.handlePasswordSubmit.bind(this)}>Submit!</button>
                    </Col>
                </Row>
            </Row>
        );
    }
}


export default EnterPassword;
