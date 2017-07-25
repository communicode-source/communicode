// CheckoutForm.js
import React from 'react';
import PropTypes from 'prop-types';
import {injectStripe} from 'react-stripe-elements';
import styles from './../../../assets/css/pages/createProject.scss';
import CardSection from './CardSection';

class CompletedCheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    async handleSubmit(ev) {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();

        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        try {
            const card = this.props.stripe.elements();
            const { token } = await this.props.stripe.createToken(card);
            this.props.deposit(token);
        }
        catch(err) {
            throw err;
        }
        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    };

    render() {
        return (
            <form onSubmit={(e) => {this.handleSubmit(e); }}>
                <CardSection />
                <button className={styles.confirm}>Confirm Project</button>
            </form>
        );
    }
}

CompletedCheckoutForm.propTypes = {
    stripe: PropTypes.object,
    deposit: PropTypes.func,
    price: PropTypes.string
};

export default injectStripe(CompletedCheckoutForm);
