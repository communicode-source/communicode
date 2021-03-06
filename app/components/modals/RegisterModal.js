import React, { PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import RegisterForm from '../layout/form/RegisterForm';

class RegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    close() {
        this.props.toggleRegisterModal();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Register for Communicode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegisterForm
                        onValidateEmail={this.props.onValidateEmail}
                        onValidatePassword={this.props.onValidatePassword}
                        onUpdateProvider={this.props.onUpdateProvider}
                        onRegisterFacebook={this.props.onRegisterFacebook}
                        onRegisterGoogle={this.props.onRegisterGoogle}
                        onRegisterLocal={this.props.onRegisterLocal}
                        user={this.props.user}
                        error={this.props.error}
                    />
                </Modal.Body>
            </Modal>
        );
    }
}

RegisterModal.propTypes = {
    onValidateEmail: PropTypes.func,
    onValidatePassword: PropTypes.func,
    onRegisterLocal: PropTypes.func,
    onRegisterFacebook: PropTypes.func,
    onRegisterGoogle: PropTypes.func,
    onUpdateProvider: PropTypes.func,
    user: PropTypes.object,
    show: PropTypes.bool,
    toggleRegisterModal: PropTypes.func,
    error: PropTypes.string
};

export default RegisterModal;
