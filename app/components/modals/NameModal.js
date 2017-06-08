import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import main from '../../assets/css/main.scss';
import modal from '../../assets/css/modals/notify.scss';
import common from '../../assets/css/pages/common.scss';
import classNames from 'classnames';

const primaryBtnClassnames = classNames(main['primary-btn'], main.btn, modal.button, modal.sendEmailBtn);

class NameModal extends React.Component {
    constructor() {
        super();
        this.showModal = true;
    }

    close() {
        this.showModal = false;
        this.forceUpdate();
    }

    render() {
        return (
            <Modal show={this.showModal}>
                <Modal.Header>
                    <Modal.Title>Hello Random Citizen!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={main.text}>
                    <h4>Please verify your first and last name</h4>
                    <input className={classNames('form-control', common.input, 'email')} defaultValue="" placeholder="First name"/><br/>
                    <input className={classNames('form-control', common.input, 'email')} defaultValue="" placeholder="Last name" />
                </Modal.Body>
                <Modal.Footer>
                    <Button className={primaryBtnClassnames} onClick={this.close.bind(this)}>Let&#39;s Begin!</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
export default NameModal;
