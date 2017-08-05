import React from 'react';
import { Row, Col } from 'react-bootstrap';

class EnterHash extends React.Component {
    constructor({hash, onHashEnter, onHashSubmit}) {
        super();
        this.hash = hash;
        this.onHashEnter = onHashEnter;
        this.onHashSubmit = onHashSubmit;
    }

    handleHashEnter(e) {
        this.onHashEnter(e.target.value);
    }

    handleHashSubmit() {
        this.onHashSubmit();
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <label>Enter Validation Code</label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <input onChange={this.handleHashEnter.bind(this)} value={this.hash} placeholder="Enter the validation code sent to your email" />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <button onClick={this.handleHashSubmit.bind(this)}>Submit Code</button>
                    </Col>
                </Row>
            </Row>
        );
    }
}


export default EnterHash;
